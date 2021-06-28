import { useEffect, useRef, ForwardedRef } from 'react';

export default function useForwardRef<T>(ref: ForwardedRef<T>) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      // eslint-disable-next-line no-param-reassign
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
}
