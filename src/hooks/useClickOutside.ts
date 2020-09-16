import { useEffect, useRef } from 'react';

type EventType = MouseEvent | TouchEvent;

export default function useClickOutside(
  handler: (event: EventType) => void,
  eventName: string = 'click',
) {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    // FIXME
    const listener = (e: any) => {
      const targetElement = ref.current as HTMLElement;

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
  }, [handler, eventName]);

  return ref;
}
