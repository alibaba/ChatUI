import React from 'react';
import ReactDOM from 'react-dom';

export function mountComponent(Comp: React.ReactElement, root = document.body) {
  const div = document.createElement('div');
  root.appendChild(div);

  const Clone = React.cloneElement(Comp, {
    onUnmount() {
      if (div) {
        ReactDOM.unmountComponentAtNode(div);
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }
    },
  });

  ReactDOM.render(Clone, div);

  return div;
}
