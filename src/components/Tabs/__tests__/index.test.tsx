import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Tabs, Tab } from '..';

beforeEach(() => {
  class ResizeObserver {
    observe = jest.fn();
    unobserve = jest.fn();
  }

  Object.defineProperty(window, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: ResizeObserver,
  });
});

afterEach(cleanup);

describe('<Tabs />', () => {
  it('should render a tabs', () => {
    const { container } = render(
      <Tabs>
        <Tab label="tab1">
          <p>test1</p>
        </Tab>
        <Tab label="tab2">
          <p>test2</p>
        </Tab>
        <Tab label="tab3">
          <p>test3</p>
        </Tab>
      </Tabs>,
    );

    const paneList = container.querySelectorAll('.Tabs-pane');

    expect(paneList.length).toBe(3);
    expect(paneList[0]).toHaveClass('active');
    expect(paneList[1]).toHaveTextContent('test2');
  });

  it('should hide header when only one', () => {
    const { container } = render(
      <Tabs hideNavIfOnlyOne>
        <Tab label="tab1">
          <p>test1</p>
        </Tab>
      </Tabs>,
    );

    const nav = container.querySelector('.Tabs-nav');

    expect(nav).not.toBeInTheDocument();
  });

  it('should ignore empty item', () => {
    const { container } = render(
      <Tabs>
        <Tab label="tab1" />
        {undefined}
      </Tabs>,
    );

    expect(container.querySelectorAll('.Tabs-navItem').length).toBe(1);
    expect(container.querySelectorAll('.Tabs-pane').length).toBe(0);
  });

  it('should render tabs with custom index', () => {
    const { container } = render(
      <Tabs index={1}>
        <Tab label="tab1">
          <p>test1</p>
        </Tab>
        <Tab label="tab2">
          <p>test2</p>
        </Tab>
        <Tab label="tab3">
          <p>test3</p>
        </Tab>
      </Tabs>,
    );

    const paneList = container.querySelectorAll('.Tabs-pane');
    expect(paneList[1]).toHaveClass('active');
  });

  it('should be scrollable', () => {
    const { container } = render(
      <Tabs scrollable>
        <Tab label="tab1">
          <p>test1</p>
        </Tab>
        <Tab label="tab2">
          <p>test2</p>
        </Tab>
        <Tab label="tab3">
          <p>test3</p>
        </Tab>
      </Tabs>,
    );

    const tabs = container.querySelector('.Tabs');
    expect(tabs).toHaveClass('Tabs--scrollable');
  });

  it('should switch tab by click', () => {
    const { container } = render(
      <Tabs>
        <Tab label="tab1">
          <p>test1</p>
        </Tab>
        <Tab label="tab2">
          <p>test2</p>
        </Tab>
        <Tab label="tab3">
          <p>test3</p>
        </Tab>
      </Tabs>,
    );

    const linkList = container.querySelectorAll('.Tabs-navLink');
    fireEvent.click(linkList[1]);

    expect(linkList[1]).toHaveClass('active');
    expect(container.querySelectorAll('.Tabs-pane')[1]).toHaveClass('active');
  });

  it('should switch tab by change index', () => {
    function Test() {
      const [index, setIndex] = React.useState(0);

      return (
        <div>
          <Tabs index={index}>
            <Tab label="tab1">
              <p>test1</p>
            </Tab>
            <Tab label="tab2">
              <p>test2</p>
            </Tab>
            <Tab label="tab3">
              <p>test3</p>
            </Tab>
          </Tabs>
          <button data-testid="btn" onClick={() => setIndex(2)} />
        </div>
      );
    }
    const { container, getByTestId } = render(<Test />);
    const linkList = container.querySelectorAll('.Tabs-navLink');

    fireEvent.click(getByTestId('btn'));
    expect(linkList[2]).toHaveClass('active');
  });

  it('should ignore active with invalid index', () => {
    function Test() {
      const [index, setIndex] = React.useState(0);

      return (
        <div>
          <Tabs index={index}>
            <Tab label="tab1">
              <p>test1</p>
            </Tab>
            <Tab label="tab2">
              <p>test2</p>
            </Tab>
            <Tab label="tab3">
              <p>test3</p>
            </Tab>
          </Tabs>
          <button data-testid="btn" onClick={() => setIndex(5)} />
        </div>
      );
    }
    const { container, getByTestId } = render(<Test />);
    const linkList = container.querySelectorAll('.Tabs-navLink');

    fireEvent.click(getByTestId('btn'));
    expect(linkList[2]).not.toHaveClass('active');
  });

  it('should call onChange', (done) => {
    const { container } = render(
      <Tabs
        onChange={(idx) => {
          if (idx === 1) {
            done();
          }
        }}
      >
        <Tab label="tab1">
          <p>Content 1</p>
        </Tab>
        <Tab label="tab2">
          <p>Content 2</p>
        </Tab>
        <Tab label="tab3">
          <p>Content 3</p>
        </Tab>
      </Tabs>,
    );

    const linkList = container.querySelectorAll('.Tabs-navLink');
    fireEvent.click(linkList[1]);

    expect(linkList[1]).toHaveClass('active');
    expect(container.querySelectorAll('.Tabs-pane')[1]).toHaveClass('active');
  });
});
