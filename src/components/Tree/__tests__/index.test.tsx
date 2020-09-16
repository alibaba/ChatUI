import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Tree, TreeNode } from '..';

afterEach(cleanup);

describe('<Tree />', () => {

  it('should support rendering children', () => {
    const children = [{
      title: 'Child node 1',
    },{
      title: 'Child node 2',
    }];
    const { container } = render(<Tree>
        <TreeNode
          title="Node 1"
          onClick={jest.fn()}
          onExpand={jest.fn()}
          children={children}
         />
         <TreeNode
          title="Node 2"
          onClick={jest.fn()}
          onExpand={jest.fn()}
          children={[]}
         />
      </Tree>);
    expect(container).toMatchSnapshot();
  });

  it('should support onExpand', () => {
    const children = [{
      title: 'Child node 1',
    },{
      title: 'Child node 2',
    }];
    const onExpand = jest.fn();
    const { container } = render(<Tree>
        <TreeNode
          title="Node 1"
          onClick={jest.fn()}
          onExpand={onExpand}
          children={children}
         />
         <TreeNode
          title="Node 2"
          onClick={jest.fn()}
          onExpand={jest.fn()}
          children={[]}
         />
      </Tree>);
    const node0 = container.querySelectorAll('.TreeNode-title')[0];
    fireEvent(node0, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(onExpand).toBeCalledTimes(1);
  });

  it('should support onClick', () => {
    const children = [{
      title: 'Child node 1',
    },{
      title: 'Child node 2',
    }];
    const onClick = jest.fn();
    const { container } = render(<Tree>
        <TreeNode
          title="Node 1"
          onClick={onClick}
          onExpand={jest.fn()}
          children={children}
         />
         <TreeNode
          title="Node 2"
          onClick={jest.fn()}
          onExpand={jest.fn()}
          children={[]}
         />
      </Tree>);
    const node1 = container.querySelectorAll('.TreeNode-title')[1];
    fireEvent(node1, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(onClick).toBeCalledTimes(1);
  });
});
