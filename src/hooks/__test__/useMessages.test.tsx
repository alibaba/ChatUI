import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import useMessages from '../useMessages';

afterEach(cleanup);

describe('useMessages', () => {
  it('should be empty array by default', () => {
    function Test() {
      const { messages } = useMessages();
      return (
        <div data-testid="list">
          {messages.map((t, i) => (
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
      const { messages } = useMessages([
        { type: 'test', content: 'test1' },
        { type: 'test', content: 'test2' },
      ]);
      return (
        <div data-testid="list">
          {messages.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.content}
            </span>
          ))}
        </div>
      );
    }

    const { queryAllByTestId } = render(<Test />);

    expect(queryAllByTestId('item').length).toBe(2);
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test2');
  });

  it('should prepend messages', () => {
    function Test() {
      const { messages, prependMsgs } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      function handleClick() {
        prependMsgs([
          { type: 'test', content: 'test3', _id: 3 },
          { type: 'test', content: 'test4', _id: 4 },
        ]);
      }

      return (
        <div data-testid="list">
          {messages.map((t) => (
            <span data-testid="item" key={t._id}>
              {t.content}
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

  it('should append message', () => {
    function Test() {
      const { messages, appendMsg } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      function handleClick() {
        appendMsg({ type: 'test', content: 'test3', _id: 3 });
      }

      return (
        <div data-testid="list">
          {messages.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.content}
            </span>
          ))}
          <button data-testid="btn" onClick={handleClick} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('btn'));
    expect(queryAllByTestId('item').length).toBe(3);
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test1');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test2');
    expect(queryAllByTestId('item')[2]).toHaveTextContent('test3');
  });

  it('should update message', () => {
    function Test() {
      const { messages, updateMsg } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      function handleClick() {
        updateMsg(2, {
          type: 'test',
          content: 'test3',
        });
      }

      return (
        <div data-testid="list">
          {messages.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.content}
            </span>
          ))}
          <button data-testid="btn" onClick={handleClick} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('btn'));
    expect(queryAllByTestId('item').length).toBe(2);
    expect(queryAllByTestId('item')[0]).toHaveTextContent('test1');
    expect(queryAllByTestId('item')[1]).toHaveTextContent('test3');
  });

  it('should delete message', () => {
    function Test() {
      const { messages, deleteMsg } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      function handleClick() {
        deleteMsg(2);
      }

      return (
        <div data-testid="list">
          {messages.map((t, i) => (
            <span data-testid="item" key={i}>
              {t.content}
            </span>
          ))}
          <button data-testid="btn" onClick={handleClick} />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('btn'));
    expect(queryAllByTestId('item').length).toBe(1);
  });

  it('should toggle typing bubble', () => {
    function Test() {
      const { messages, setTyping } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      return (
        <div data-testid="list">
          {messages.map((t) => (
            <span data-testid="item" key={t._id}>
              {t.type === 'typing' ? t.type : t.content}
            </span>
          ))}
          <button
            data-testid="add"
            onClick={() => {
              setTyping(true);
            }}
          />
          <button
            data-testid="remove"
            onClick={() => {
              setTyping(false);
            }}
          />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('add'));
    expect(queryAllByTestId('item').length).toBe(3);
    expect(queryAllByTestId('item')[2]).toHaveTextContent('typing');

    fireEvent.click(getByTestId('remove'));
    expect(queryAllByTestId('item').length).toBe(2);
  });

  it('should ignore when call `setTyping` twice', () => {
    function Test() {
      const { messages, setTyping } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      return (
        <div data-testid="list">
          {messages.map((t) => (
            <span data-testid="item" key={t._id}>
              {t.type === 'typing' ? t.type : t.content}
            </span>
          ))}
          <button
            data-testid="add"
            onClick={() => {
              setTyping(true);
            }}
          />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('add'));
    fireEvent.click(getByTestId('add'));
    expect(queryAllByTestId('item').length).toBe(3);
    expect(queryAllByTestId('item')[2]).toHaveTextContent('typing');
  });

  it('should replace typing bubble when append', () => {
    function Test() {
      const { messages, setTyping, appendMsg } = useMessages([
        { type: 'test', content: 'test1', _id: 1 },
        { type: 'test', content: 'test2', _id: 2 },
      ]);

      return (
        <div data-testid="list">
          {messages.map((t) => (
            <span data-testid="item" key={t._id}>
              {t.type === 'typing' ? t.type : t.content}
            </span>
          ))}
          <button
            data-testid="typingBtn"
            onClick={() => {
              setTyping(true);
            }}
          />
          <button
            data-testid="appendBtn"
            onClick={() => {
              appendMsg({ type: 'test', content: 'test3', _id: 3 });
            }}
          />
        </div>
      );
    }

    const { queryAllByTestId, getByTestId } = render(<Test />);

    fireEvent.click(getByTestId('typingBtn'));
    expect(queryAllByTestId('item')[2]).toHaveTextContent('typing');

    fireEvent.click(getByTestId('appendBtn'));
    expect(queryAllByTestId('item')[2]).toHaveTextContent('test3');
  });
});
