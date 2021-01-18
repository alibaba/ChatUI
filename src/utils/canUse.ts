const testCache = {
  passiveListener: () => {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line
        get() {
          supportsPassive = true;
        },
      });
      // @ts-ignore
      window.addEventListener('test', null, opts);
    } catch (e) {
      // No support
    }
    return supportsPassive;
  },
  smoothScroll: () => 'scrollBehavior' in document.documentElement.style,
  touch: () => 'ontouchstart' in window,
};

export function addTest(name: string, test: Function) {
  // @ts-ignore
  testCache[name] = test();
}

export default function canUse(name: string) {
  // @ts-ignore
  return testCache[name]();
}
