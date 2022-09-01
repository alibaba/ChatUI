import React from 'react';
import clsx from 'clsx';
import { SystemMessage } from './SystemMessage';
import { IMessageStatus } from '../MessageStatus';
import { Avatar } from '../Avatar';
import { Time } from '../Time';
import { Typing } from '../Typing';

export interface User {
  avatar?: string;
  name?: string;
  url?: string;
  [k: string]: any;
}

export type MessageId = string | number;

export interface MessageProps {
  /**
   * 唯一ID
   */
  _id: MessageId;
  /**
   * 消息类型
   */
  type: string;
  /**
   * 消息内容
   */
  content?: any;
  /**
   * 消息创建时间
   */
  createdAt?: number;
  /**
   * 消息发送者信息
   */
  user?: User;
  /**
   * 消息位置
   */
  position?: 'left' | 'right' | 'center' | 'pop';
  /**
   * 是否显示时间
   */
  hasTime?: boolean;
  /**
   * 状态
   */
  status?: IMessageStatus;
  /**
   * 消息内容渲染函数
   */
  renderMessageContent?: (message: MessageProps) => React.ReactNode;
}

const Message = (props: MessageProps) => {
  const { renderMessageContent = () => null, ...msg } = props;
  const { type, content, user = {}, _id: id, position = 'left', hasTime = true, createdAt } = msg;
  const { name, avatar } = user;

  if (type === 'system') {
    return <SystemMessage content={content.text} action={content.action} />;
  }

  const isRL = position === 'right' || position === 'left';

  return (
    <div className={clsx('Message', position)} data-id={id} data-type={type}>
      {hasTime && createdAt && (
        <div className="Message-meta">
          <Time date={createdAt} />
        </div>
      )}
      <div className="Message-main">
        {isRL && avatar && <Avatar src={avatar} alt={name} url={user.url} />}
        <div className="Message-inner">
          {isRL && name && <div className="Message-author">{name}</div>}
          <div className="Message-content" role="alert" aria-live="assertive" aria-atomic="false">
            {type === 'typing' ? <Typing /> : renderMessageContent(msg)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Message);
