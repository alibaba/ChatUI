export function importScript(url: string, name: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';

    const destroy = () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (name && window[name as any]) {
        delete window[name as any];
      }
    };

    script.onload = () => {
      resolve(window[name as any]);
      destroy();
    };

    script.onerror = () => {
      reject(new Error(`Failed to import: ${url}`));
      destroy();
    };

    script.src = url;
    document.head.appendChild(script);
  });
}
