import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Base } from '../Base';

afterEach(cleanup);

describe('<Base />', () => {
  it('should render a modal', () => {
    const { getByRole, getByTestId } = render(
      <Base active>
        <span data-testid="content" />
      </Base>,
    );

    expect(getByRole('dialog')).toBeInTheDocument();
    expect(getByTestId('content')).toBeInTheDocument();
  });

  it('should have a title', () => {
    const { baseElement } = render(<Base active baseClass="test" title="test" titleId="testId" />);
    const title = baseElement.querySelector('.test-title');

    expect(title).toHaveTextContent('test');
    expect(title).toHaveAttribute('id', 'testId');
  });

  it('should have a close icon', () => {
    const { baseElement } = render(
      <div>
        <Base active baseClass="test1" />
        <Base active baseClass="test2" onClose={jest.fn} />
        <Base active baseClass="test3" onClose={jest.fn} showClose={false} />
      </div>,
    );

    expect(baseElement.querySelector('.test1-close')).toBeNull();
    expect(baseElement.querySelector('.test2-close')).not.toBeNull();
    expect(baseElement.querySelector('.test3-close')).toBeNull();
  });

  it('should have a backdrop', () => {
    const { baseElement } = render(<Base active />);

    expect(baseElement.querySelector('.Backdrop')).not.toBeNull();
  });

  it('should not have a backdrop', () => {
    const { baseElement } = render(<Base active backdrop={false} />);

    expect(baseElement.querySelector('.Backdrop')).toBeNull();
  });

  it('should overflow if specified', () => {
    const { baseElement } = render(<Base active baseClass="test" overflow />);

    expect(baseElement.querySelector('.test-body')).toHaveClass('overflow');
  });

  it('should render actions', () => {
    const { baseElement } = render(<Base active baseClass="test" actions={[{ label: 'test1' }]} />);

    expect(baseElement.querySelectorAll('.Btn').length).toBe(1);
    expect(baseElement.querySelector('.test-footer')).toHaveClass('test-footer--v');
  });

  it('should render actions (horizontal)', () => {
    const { baseElement } = render(
      <Base
        active
        baseClass="test"
        actions={[{ label: 'test1' }, { label: 'test2' }]}
        vertical={false}
      />,
    );

    expect(baseElement.querySelectorAll('.Btn').length).toBe(2);
    expect(baseElement.querySelector('.test-footer')).toHaveClass('test-footer--h');
  });

  it('should have a custom className', () => {
    const { baseElement } = render(<Base baseClass="test" className="custom" active />);

    expect(baseElement.querySelector('.test')).not.toBeNull();
    expect(baseElement.querySelector('.custom')).not.toBeNull();
  });

  it('should toggle modal by `active` prop', () => {
    function Test() {
      const [active, setActive] = useState(false);
      return (
        <div>
          <button data-testid="btn" onClick={() => setActive(true)}>
            open
          </button>
          <Base active={active} />
        </div>
      );
    }

    const { baseElement, getByRole, getByTestId } = render(<Test />);

    expect(baseElement.querySelector('[role="dialog"]')).toBe(null);

    fireEvent.click(getByTestId('btn'));
    expect(getByRole('dialog')).toBeInTheDocument();
  });

  it('should auto focus if specified', () => {
    const { baseElement } = render(<Base active autoFocus baseClass="test" />);
    const wrap = baseElement.querySelector('.test');

    expect(wrap).toHaveFocus();
  });

  it('should call onClose when click close btn', (done) => {
    const { baseElement } = render(
      <Base
        baseClass="test"
        active
        onClose={() => {
          done();
        }}
      />,
    );
    const closeBtn = baseElement.querySelector('.test-close');

    if (closeBtn) {
      fireEvent.click(closeBtn);
    }
  });

  it('should call onClose when click backdrop', (done) => {
    const { baseElement } = render(
      <Base
        baseClass="test"
        active
        onClose={() => {
          done();
        }}
      />,
    );
    const backdrop = baseElement.querySelector('.Backdrop');

    if (backdrop) {
      fireEvent.click(backdrop);
    }
  });
});
