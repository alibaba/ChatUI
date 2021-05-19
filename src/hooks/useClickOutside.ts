import { useEffect, useRef } from 'react';

export default function useClickOutside<T extends HTMLElement = any>(
  handler: (event: any) => void,
  eventName: string = 'click',
) {
  const ref = useRef<T>();

  useEffect(() => {
    const listener = (e: any) => {
      const targetElement = ref.current;

      if (!targetElement || targetElement.contains(e.target)) {
        return;
      }
      if (handler) {
        handler(e);
      }
    };

    document.addEventListener(eventName, listener);

    return () => {
      document.removeEventListener(eventName, listener);
    };
  }, [eventName, handler]);

  return ref;
}
