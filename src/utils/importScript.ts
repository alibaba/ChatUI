declare global {
  interface Window {
    [index: string]: any;
  }
}

export function importScript(url: string, name: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';

    const destroy = () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (name && window[name]) {
        delete window[name];
      }
    };

    script.onload = () => {
      resolve(window[name]);
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
