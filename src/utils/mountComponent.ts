import React from 'react';
import ReactDOM from 'react-dom';

export function mountComponent(Comp: React.ReactElement, root = document.body) {
  const div = document.createElement('div');
  root.appendChild(div);

  const Clone = React.cloneElement(Comp, {
    onUnmount() {
      ReactDOM.unmountComponentAtNode(div);
      if (root && div) {
        root.removeChild(div);
      }
    },
  });

  ReactDOM.render(Clone, div);

  return div;
}
