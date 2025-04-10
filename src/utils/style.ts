/* eslint-disable no-param-reassign */
export const setTransform = (el: HTMLElement, value: string) => {
  if (el) {
    el.style.transform = value;
    el.style.webkitTransform = value;
  }
};

export const setTransition = (el: HTMLElement, value: string) => {
  if (el) {
    el.style.transition = value;
    el.style.webkitTransition = value;
  }
};
