import DOMPurify from 'dompurify';

DOMPurify.addHook('beforeSanitizeAttributes', (node: Element) => {
  if (node instanceof HTMLElement && node.hasAttribute('href')) {
    const href = node.getAttribute('href');

    if (href) {
      node.dataset.cuiHref = href;
    }
    if (node.getAttribute('target') === '_blank') {
      node.dataset.cuiTarget = '1';
    }
  }
});

DOMPurify.addHook('afterSanitizeAttributes', (node: Element) => {
  if (node instanceof HTMLElement) {
    if (node.dataset.cuiHref && node.hasAttribute('href')) {
      node.removeAttribute('data-cui-href');
    }
    if (node.dataset.cuiTarget) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
      node.removeAttribute('data-cui-target');
    }
  }
});
