/* eslint-disable no-underscore-dangle */
import { useState, useMemo, useRef, useCallback } from 'react';
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

const TYPING_ID = '_TYPING_';

export default function useMessages(initialState: MessageWithoutId[] = []) {
  const initialMsgs: Messages = useMemo(() => initialState.map((t) => makeMsg(t)), [initialState]);
  const [messages, setMessages] = useState(initialMsgs);
  const isTypingRef = useRef(false);

  const prependMsgs = useCallback((msgs: Messages) => {
    setMessages((prev: Messages) => [...msgs, ...prev]);
  }, []);

  const updateMsg = useCallback((id: MessageId, msg: MessageWithoutId) => {
    setMessages((prev) => prev.map((t) => (t._id === id ? makeMsg(msg, id) : t)));
  }, []);

  const appendMsg = useCallback(
    (msg: MessageWithoutId) => {
      const newMsg = makeMsg(msg);
      if (isTypingRef.current) {
        isTypingRef.current = false;
        updateMsg(TYPING_ID, newMsg);
      } else {
        setMessages((prev) => [...prev, newMsg]);
      }
    },
    [updateMsg],
  );

  const deleteMsg = useCallback((id: MessageId) => {
    setMessages((prev) => prev.filter((t) => t._id !== id));
  }, []);

  const resetList = useCallback((list = []) => {
    setMessages(list);
  }, []);

  const setTyping = useCallback(
    (typing: boolean) => {
      if (typing === isTypingRef.current) return;

      if (typing) {
        appendMsg({
          _id: TYPING_ID,
          type: 'typing',
        });
      } else {
        deleteMsg(TYPING_ID);
      }
      isTypingRef.current = typing;
    },
    [appendMsg, deleteMsg],
  );

  return {
    messages,
    prependMsgs,
    appendMsg,
    updateMsg,
    deleteMsg,
    resetList,
    setTyping,
  };
}
