import { useState, useMemo, useCallback } from 'react';
import { getRandomString } from '../utils';
import { MessageProps, MessageId } from '../components/Message';

type Messages = MessageProps[];

type MessageWithoutId = Omit<MessageProps, '_id'> & {
  _id?: MessageId;
};

const TIME_GAP = 5 * 60 * 1000;
let lastTs = 0;

const makeMsg = (msg: MessageWithoutId, id?: MessageId) => {
  const ts = msg.createdAt || Date.now();
  const hasTime = msg.hasTime || ts - lastTs > TIME_GAP;

  if (hasTime) {
    lastTs = ts;
  }

  return {
    ...msg,
    _id: msg._id || id || getRandomString(),
    createdAt: ts,
    position: msg.position || 'left',
    hasTime,
  };
};

export default function useMessages(initialState: MessageWithoutId[] = []) {
  const initialMsgs: Messages = useMemo(() => initialState.map((t) => makeMsg(t)), [initialState]);
  const [messages, setMessages] = useState(initialMsgs);

  const prependMsgs = useCallback((msgs: Messages) => {
    setMessages((prev: Messages) => [...msgs, ...prev]);
  }, []);

  const updateMsg = useCallback((id: MessageId, msg: MessageWithoutId) => {
    setMessages((prev) => prev.map((t) => (t._id === id ? makeMsg(msg, id) : t)));
  }, []);

  const appendMsg = useCallback((msg: MessageWithoutId) => {
    const newMsg = makeMsg(msg);
    setMessages((prev) => [...prev, newMsg]);
    return newMsg._id;
  }, []);

  const deleteMsg = useCallback((id: MessageId) => {
    setMessages((prev) => prev.filter((t) => t._id !== id));
  }, []);

  const resetList = useCallback((list = []) => {
    setMessages(list);
  }, []);

  return {
    messages,
    prependMsgs,
    appendMsg,
    updateMsg,
    deleteMsg,
    resetList,
  };
}
