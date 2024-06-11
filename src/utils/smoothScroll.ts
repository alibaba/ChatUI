import getFps from './getFps';

interface Props {
  el: HTMLElement;
  to: number;
  duration?: number;
  x?: boolean;
}

let rAF = requestAnimationFrame;
const mockRAF = (cb: Function) => window.setTimeout(cb, 16);

getFps((fps) => {
  rAF = fps < 55 ? mockRAF : requestAnimationFrame;
}, 3);

export default function smoothScroll({ el, to, duration = 300, x }: Props) {
  const attr = x ? 'scrollLeft' : 'scrollTop';

  if (!rAF) {
    el[attr] = to;
    return;
  }

  const from = el[attr];
  const frames = Math.round(duration / 16);
  const step = (to - from) / frames;
  let count = 0;

  function animate() {
    // eslint-disable-next-line no-param-reassign
    el[attr] += step;

    // eslint-disable-next-line no-plusplus
    if (++count < frames) {
      rAF(animate);
    }
  }

  animate();
}
