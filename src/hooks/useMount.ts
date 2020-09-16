import React, { useState, useEffect, useRef } from 'react';
import { reflow } from '../utils';

type useMountProps = {
  active?: boolean;
  ref: React.RefObject<any>;
  delay?: number;
};

function useMount({ active = false, ref, delay = 300 }: useMountProps) {
  const [isShow, setIsShow] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null!);

  useEffect(() => {
    if (active) {
      clearTimeout(timeout.current);
      setDidMount(active);
    } else {
      setIsShow(active);
      timeout.current = setTimeout(() => {
        setDidMount(active);
      }, delay);
    }
  }, [active]);

  useEffect(() => {
    if (ref.current) {
      reflow(ref.current);
    }
    setIsShow(didMount);
  }, [didMount]);

  return {
    didMount,
    isShow,
  };
}

export default useMount;
