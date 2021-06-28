export default function countLines(el: Element) {
  const styles = window.getComputedStyle(el, null);
  const lh = parseInt(styles.lineHeight, 10);
  const h = parseInt(styles.height, 10);
  return Math.round(h / lh);
}
