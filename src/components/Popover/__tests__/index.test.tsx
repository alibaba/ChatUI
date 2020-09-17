import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Popover } from '..';

afterEach(cleanup);

function Test() {
  const [active, setActive] = React.useState(false);
  const popoverTarget = React.useRef<HTMLButtonElement>(null!);

  return (
    <div>
      <button
        ref={popoverTarget}
        onClick={() => {
          setActive(true);
        }}
        data-testid="btn"
      >
        btn
      </button>
      <Popover
        active={active}
        target={popoverTarget.current}
        onClose={() => {
          setActive(!active);
        }}
      >
        <span data-testid="popoverContent" />
      </Popover>
    </div>
  );
}

describe('<Popover />', () => {
  it('should not render popover default', () => {
    render(<Test />);

    expect(document.querySelector('.Popover')).not.toBeInTheDocument();
  });

  it('should render popover when active', () => {
    const { getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('btn'));

    expect(document.querySelector('.Popover')).toBeInTheDocument();
  });
});
