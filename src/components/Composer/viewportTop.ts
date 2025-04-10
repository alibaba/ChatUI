const rootEl = document.documentElement;
let chatApp: HTMLElement | null;
let requestID: number;
let viewportTop = 0;

export function setViewportTop(top: number) {
  cancelAnimationFrame(requestID);
  rootEl.style.setProperty('--viewport-top', `${top}px`);
}

export function updateViewportTop() {
  if (!chatApp) {
    chatApp = document.querySelector('.ChatApp');
  }

  if (!chatApp) return;

  const { top } = chatApp.getBoundingClientRect();

  if (top === 0) {
    requestID = requestAnimationFrame(updateViewportTop);
  } else {
    viewportTop = Math.abs(top);
    setViewportTop(viewportTop);
  }
}
