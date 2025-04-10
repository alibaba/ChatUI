export default function getToBottom(el: HTMLElement) {
  return el.scrollHeight - el.scrollTop - el.offsetHeight;
}
