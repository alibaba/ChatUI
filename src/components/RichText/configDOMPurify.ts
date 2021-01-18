import DOMPurify from 'dompurify';

function getLinkAttr(node: Element, attr: string) {
  return (node.nodeName === 'A' && node.getAttribute(attr)) || '';
}

// set `a` element owning target to `target=_blank`
// https://github.com/cure53/DOMPurify/issues/317
DOMPurify.addHook('beforeSanitizeAttributes', (node: Element) => {
  if (getLinkAttr(node, 'target')) {
    node.setAttribute('rel', 'noopener');
  }
});

DOMPurify.addHook('afterSanitizeAttributes', (node: Element) => {
  if (getLinkAttr(node, 'rel') === 'noopener') {
    node.setAttribute('target', '_blank');
  }
});
