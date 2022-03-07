import React from 'react';
import { DemoPage, DemoSection } from '../components';
import Chat, {
  Bubble,
  MessageProps,
  useMessages,
  QuickReplyItemProps,
  useQuickReplies,
  Card,
  CardTitle,
  CardText,
  List,
  ListItem,
  Flex,
  FlexItem,
  ScrollView,
  ToolbarItemProps,
} from '../../../src';
import OrderSelector from './OrdderSelector';

type MessageWithoutId = Omit<MessageProps, '_id'>;

const initialMessages: MessageWithoutId[] = [
  {
    type: 'text',
    content: { text: 'Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
    user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg', name: '小小蜜' },
  },
  {
    type: 'guess-you',
  },
  {
    type: 'skill-cards',
  },
  {
    type: 'text',
    content: { text: '小蜜我要查看我的物流信息' },
    position: 'right',
    user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
  },
  {
    type: 'image',
    content: {
      picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
    },
  },
];

const defaultQuickReplies = [
  {
    icon: 'message',
    name: '1联系人工服务',
    code: 'q1',
    isNew: true,
    isHighlight: true,
  },
  {
    name: '如何申请退款',
    code: 'orderSelector',
    isNew: true,
  },
  {
    name: '3强快捷短语',
    code: 'q3',
    isHighlight: true,
  },
  {
    name: '4弱快捷短语',
    code: 'q4',
  },
  {
    name: '5强快捷短语',
    code: 'q5',
    isHighlight: true,
  },
  {
    name: '6弱快捷短语',
    code: 'q6',
  },
];

const skillList = [
  { title: '话费充值', desc: '智能充值智能充值' },
  { title: '评价管理', desc: '我的评价' },
  { title: '联系商家', desc: '急速联系' },
  { title: '红包卡券', desc: '使用优惠' },
  { title: '修改地址', desc: '修改地址' },
];

export default () => {
  // 消息列表
  const { messages, appendMsg, setTyping, prependMsgs } = useMessages(initialMessages);
  const { quickReplies, replace } = useQuickReplies(defaultQuickReplies);
  const msgRef = React.useRef(null);

  // 发送回调
  function handleSend(type: string, val: string) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
        });
      }, 1000);
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item: QuickReplyItemProps) {
    handleSend('text', item.name);

    if (item.code === 'q1') {
      replace([
        {
          name: '短语a',
          code: 'qa',
          isHighlight: true,
        },
        {
          name: '短语b',
          code: 'qb',
        },
      ]);
    } else if (item.code === 'orderSelector') {
      appendMsg({
        type: 'order-selector',
        content: {},
      });
    }
  }

  function handleRefresh() {
    prependMsgs([
      {
        _id: '1111',
        type: 'text',
        content: { text: '11111Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
      {
        _id: '2222',
        type: 'text',
        content: { text: '22222 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
      {
        _id: '3333',
        type: 'text',
        content: { text: '333 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
      {
        _id: '4444',
        type: 'text',
        content: { text: '444 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
      {
        _id: '5555',
        type: 'text',
        content: { text: '555 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
      {
        _id: '6666',
        type: 'text',
        content: { text: '666 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
      {
        _id: '7777',
        type: 'text',
        content: { text: '777 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
        user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
      },
    ]);
    return Promise.resolve({});
  }

  function handleToolbarClick(item: ToolbarItemProps) {
    if (item.type === 'orderSelector') {
      appendMsg({
        type: 'order-selector',
        content: {},
      });
    }
  }

  function renderMessageContent(msg: MessageProps) {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        return <Bubble content={content.text} />;
      case 'guess-you':
        return (
          <Card fluid>
            <Flex>
              <div className="guess-you-aside">
                <h1>猜你想问</h1>
              </div>
              <FlexItem>
                <List>
                  <ListItem content="我的红包退款去哪里?" as="a" rightIcon="chevron-right" />
                  <ListItem content="我的红包退款去哪里?" as="a" rightIcon="chevron-right" />
                  <ListItem content="如何修改评价?" as="a" rightIcon="chevron-right" />
                  <ListItem content="物流问题咨询" as="a" rightIcon="chevron-right" />
                </List>
              </FlexItem>
            </Flex>
          </Card>
        );
      case 'skill-cards':
        return (
          <ScrollView
            className="skill-cards"
            data={skillList}
            fullWidth
            renderItem={(item) => (
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.desc}</CardText>
              </Card>
            )}
          />
        );
      case 'order-selector':
        return <OrderSelector />;
      case 'image':
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <div style={{ height: '60vh' }}>
          <Chat
            onRefresh={handleRefresh}
            navbar={{
              leftContent: {
                icon: 'chevron-left',
                title: 'Back',
              },
              rightContent: [
                {
                  icon: 'apps',
                  title: 'Applications',
                },
                {
                  icon: 'ellipsis-h',
                  title: 'More',
                },
              ],
              title: '智能助理',
            }}
            toolbar={[
              {
                type: 'orderSelector',
                icon: 'shopping-bag',
                title: 'OrdderSelector',
              },
              {
                type: 'photo',
                title: 'Photo',
                img: 'https://gw.alicdn.com/tfs/TB1eDjNj.T1gK0jSZFrXXcNCXXa-80-80.png',
              },
            ]}
            messagesRef={msgRef}
            onToolbarClick={handleToolbarClick}
            recorder={{ canRecord: true }}
            wideBreakpoint="600px"
            messages={messages}
            renderMessageContent={renderMessageContent}
            quickReplies={quickReplies}
            onQuickReplyClick={handleQuickReplyClick}
            onSend={handleSend}
            onImageSend={() => Promise.resolve()}
          />
        </div>
      </DemoSection>
    </DemoPage>
  );
};
