import { useEffect, useRef } from 'react';

export default function useWindowResize(handler: () => void) {
  const running = useRef(false);

  useEffect(() => {
    function runCallback() {
      handler();
      running.current = false;
    }

    function resizeThrottler() {
      if (!running.current) {
        running.current = true;

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallback);
        } else {
          setTimeout(runCallback, 66);
        }
      }
    }

    window.addEventListener('resize', resizeThrottler);
    return () => {
      window.removeEventListener('resize', resizeThrottler);
    };
  }, [handler]);
}
