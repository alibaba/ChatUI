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
    type: 'system',
    content: { text: '88VIP专属智能客服小蜜 为您服务' },
  },
  {
    type: 'text',
    content: { text: 'Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
    user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg', name: '小小蜜' },
    createdAt: Date.now(),
    hasTime: true,
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
  {
    type: 'system',
    content: {
      text: '由于您长时间未说话或退出小蜜（离开页面、锁屏等）已自动结束本次服务',
    },
  },
];

const defaultQuickReplies = [
  {
    icon: 'shopping-bag',
    name: '咨询订单问题（高亮）',
    code: 'orderSelector',
    isHighlight: true,
  },
  {
    icon: 'shopping-bag',
    name: '如何申请退款（高亮）',
    code: 'orderSelector',
    isHighlight: true,
  },
  {
    icon: 'message',
    name: '联系人工服务（高亮+新）',
    code: 'q1',
    isNew: true,
    isHighlight: true,
  },
  {
    name: '质量问题（新）',
    code: 'q3',
    isNew: true,
  },
  {
    name: '卖家文案',
    code: 'q4',
  },
  {
    name: '5强快捷短语',
    code: 'q5',
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

const toolbar = [
  {
    type: 'smile',
    icon: 'smile',
    title: '表情',
  },
  {
    type: 'orderSelector',
    icon: 'shopping-bag',
    title: '宝贝',
  },
  {
    type: 'image',
    icon: 'image',
    title: '图片',
  },
  {
    type: 'camera',
    icon: 'camera',
    title: '拍照',
  },
  {
    type: 'photo',
    title: 'Photo',
    img: 'https://gw.alicdn.com/tfs/TB1eDjNj.T1gK0jSZFrXXcNCXXa-80-80.png',
  },
];

export default () => {
  // 消息列表
  const { messages, appendMsg, setTyping, prependMsgs } = useMessages(initialMessages);
  const { quickReplies, replace } = useQuickReplies(defaultQuickReplies);
  const msgRef = React.useRef(null);

  window.appendMsg = appendMsg;
  window.msgRef = msgRef;

  // 发送回调
  function handleSend(type: string, val: string) {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTimeout(() => {
        setTyping(true);
      }, 10);

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
    return new Promise((resolve) => {
      setTimeout(() => {
        const now = Date.now();

        prependMsgs([
          {
            _id: now + '1111',
            type: 'text',
            content: { text: '11111Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
          {
            _id: now + '2222',
            type: 'text',
            content: { text: '22222 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
          {
            _id: now + '3333',
            type: 'text',
            content: { text: '333 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
          {
            _id: now + '4444',
            type: 'text',
            content: { text: '444 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
          {
            _id: now + '5555',
            type: 'text',
            content: { text: '555 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
          {
            _id: now + '6666',
            type: 'text',
            content: { text: '666 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
          {
            _id: now + '7777',
            type: 'text',
            content: { text: '777 Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
            user: { avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg' },
          },
        ]);
        resolve({});
      }, 800);
    });
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
      <div style={{ height: 'calc(100vh - 48px)', marginTop: '-12px' }}>
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
          rightAction={{ icon: 'compass' }}
          toolbar={toolbar}
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
    </DemoPage>
  );
};
