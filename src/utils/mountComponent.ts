import React from 'react';
import ReactDOM from 'react-dom';

function mountComponent(Comp: React.ReactElement, root = document.body) {
  const div = document.createElement('div');
  root.appendChild(div);

  const Clone = React.cloneElement(Comp, {
    onUnmount() {
      ReactDOM.unmountComponentAtNode(div);
      root.removeChild(div);
    },
  });

  ReactDOM.render(Clone, div);

  return div;
}

export default mountComponent;
