import { useState, useEffect, useRef } from 'react';
import { QuickReplyItemProps } from '../components/QuickReplies';

type QuickReplies = QuickReplyItemProps[];

export default function useQuickReplies(initialState: QuickReplies = []) {
  const [quickReplies, setQuickReplies] = useState(initialState);
  const [visible, setVisible] = useState(true);
  const savedRef = useRef<QuickReplies>();
  const stashRef = useRef<QuickReplies>();

  useEffect(() => {
    savedRef.current = quickReplies;
  }, [quickReplies]);

  const prepend = (list: QuickReplies) => {
    setQuickReplies((prev) => [...list, ...prev]);
  };

  // prepend、replace 后立即 save 只会保存上一个状态
  // 因为 savedRef.current 的更新优先级最后，用 setTimeout 可解
  const save = () => {
    stashRef.current = savedRef.current;
  };

  const pop = () => {
    if (stashRef.current) {
      setQuickReplies(stashRef.current);
    }
  };

  return {
    quickReplies,
    prepend,
    replace: setQuickReplies,
    visible,
    setVisible,
    save,
    pop,
  };
}
