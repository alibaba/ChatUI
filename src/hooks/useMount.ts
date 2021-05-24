import React, { useState, useEffect, useRef } from 'react';
import { reflow } from '../utils';

interface UseMountOptions {
  active?: boolean;
  ref: React.RefObject<any>;
  delay?: number;
}

function useMount({ active = false, ref, delay = 300 }: UseMountOptions) {
  const [isShow, setIsShow] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (active) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setDidMount(active);
    } else {
      setIsShow(active);
      timeout.current = setTimeout(() => {
        setDidMount(active);
      }, delay);
    }
  }, [active, delay]);

  useEffect(() => {
    if (ref.current) {
      reflow(ref.current);
    }
    setIsShow(didMount);
  }, [didMount, ref]);

  return {
    didMount,
    isShow,
  };
}

export default useMount;
