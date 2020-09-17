import { useState, useMemo } from 'react';
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
  const hasTime = ts - lastTs > TIME_GAP;

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

const TYPING_ID = '_TYPING_';
let isTyping = false;

export default function useMessages(initialState: MessageWithoutId[] = []) {
  const initialMsgs: Messages = useMemo(() => initialState.map(makeMsg), [initialState]);
  const [messages, setMessages] = useState(initialMsgs);

  const prependMsgs = (msgs: Messages) => {
    setMessages((prev: Messages) => [...msgs, ...prev]);
  };

  const updateMsg = (id: MessageId, msg: MessageWithoutId) => {
    setMessages((prev) => prev.map((t) => (t._id === id ? makeMsg(msg, id) : t)));
  };

  const appendMsg = (msg: MessageWithoutId) => {
    const newMsg = makeMsg(msg);
    if (isTyping) {
      isTyping = false;
      updateMsg(TYPING_ID, newMsg);
    } else {
      setMessages((prev) => [...prev, newMsg]);
    }
  };

  const deleteMsg = (id: MessageId) => {
    setMessages((prev) => prev.filter((t) => t._id !== id));
  };

  const setTyping = (typing: boolean) => {
    if (typing) {
      appendMsg({
        _id: TYPING_ID,
        type: 'typing',
        content: {},
      });
      isTyping = typing;
    }
  };

  return {
    messages,
    prependMsgs,
    appendMsg,
    updateMsg,
    deleteMsg,
    setTyping,
  };
}
