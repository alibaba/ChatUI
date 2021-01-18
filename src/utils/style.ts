/* eslint-disable no-param-reassign */
export const setTransform = (el: HTMLElement, value: string) => {
  el.style.transform = value;
  el.style.webkitTransform = value;
};

export const setTransition = (el: HTMLElement, value: string) => {
  el.style.transition = value;
  el.style.webkitTransition = value;
};
