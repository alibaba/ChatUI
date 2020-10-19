import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import useQuickReplies from '../useQuickReplies';

afterEach(cleanup);

describe('useQuickReplies', () => {
  it('should be empty array by default', () => {
    function Test() {
      const { quickReplies } = useQuickReplies();
      return (
        <div data-testid="list">
          {quickReplies.map((t, i) => (
            <span data-testid="item" key={i}>
              {t}
            </span>
          ))}
        </div>
      );
    }

    const { queryAllByTestId } = render(<Test />);

    expect(queryAllByTestId('item').length).toBe(0);
  });

  it('should have initial value', () => {
    function Test() {
      const { quickReplies } = useQuickReplies([{ name: 'test1' }, { name: 'test2' }]);
      return (
        <div data-testid="list">
          {quickReplies.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.name}
            </span>
          ))}
        </div>
      );
    }

    const { queryAllByTestId } = render(<Test />);

    expect(queryAllByTestId('item').length).toBe(2);
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test2');
  });

  it('should prepend items', () => {
    function Test() {
      const { quickReplies, prepend } = useQuickReplies([{ name: 'test1' }, { name: 'test2' }]);

      function handleClick() {
        prepend([{ name: 'test3' }, { name: 'test4' }]);
      }

      return (
        <div data-testid="list">
          {quickReplies.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.name}
            </span>
          ))}
          <button data-testid="btn" onClick={handleClick} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('btn'));
    expect(queryAllByTestId('item').length).toBe(4);
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test3');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test4');
    expect(queryAllByTestId('item')[2]).toHaveTextContent('test1');
    expect(queryAllByTestId('item')[3]).toHaveTextContent('test2');
  });

  it('should replace items', () => {
    function Test() {
      const { quickReplies, replace } = useQuickReplies([{ name: 'test1' }, { name: 'test2' }]);

      function handleClick() {
        replace([{ name: 'test3' }, { name: 'test4' }]);
      }

      return (
        <div data-testid="list">
          {quickReplies.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.name}
            </span>
          ))}
          <button data-testid="btn" onClick={handleClick} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('btn'));
    expect(queryAllByTestId('item').length).toBe(2);
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test3');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test4');
  });

  it('should restore items', () => {
    function Test() {
      const { quickReplies, replace, save, pop } = useQuickReplies([
        { name: 'test1' },
        { name: 'test2' },
      ]);

      function handleReplace() {
        replace([{ name: 'test3' }, { name: 'test4' }]);
      }

      function handleSave() {
        save();
      }

      function handlePop() {
        pop();
      }

      return (
        <div data-testid="list">
          {quickReplies.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.name}
            </span>
          ))}
          <button data-testid="replace" onClick={handleReplace} />
          <button data-testid="save" onClick={handleSave} />
          <button data-testid="pop" onClick={handlePop} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('save'));
    fireEvent.click(getByTestId('replace'));
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test3');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test4');

    fireEvent.click(getByTestId('pop'));
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test1');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test2');
  });

  it('should ignore restore when not saved', () => {
    function Test() {
      const { quickReplies, replace, pop } = useQuickReplies([
        { name: 'test1' },
        { name: 'test2' },
      ]);

      function handleReplace() {
        replace([{ name: 'test3' }, { name: 'test4' }]);
      }

      function handlePop() {
        pop();
      }

      return (
        <div data-testid="list">
          {quickReplies.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.name}
            </span>
          ))}
          <button data-testid="replace" onClick={handleReplace} />
          <button data-testid="pop" onClick={handlePop} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('replace'));
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test3');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test4');

    fireEvent.click(getByTestId('pop'));
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test3');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test4');
  });
});
