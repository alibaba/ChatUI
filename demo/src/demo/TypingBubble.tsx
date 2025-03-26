import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import Chat, { MessageProps, useMessages, Bubble, Typing, TypingBubble } from '../../../src';

const mockContent = `
以下是杭州适合周末游玩的3个推荐地点，兼顾自然风光、文化底蕴和休闲体验，基于提供的资料整理：
1. 西湖及周边（推荐理由：经典景区，文化沉浸）
景点亮点：
游览西湖十景（如苏堤春晓、断桥残雪、雷峰塔、三潭印月），可步行环湖或乘坐摇橹船（手划船150元/小时）26。
傍晚登宝石山，俯瞰西湖全景与“雷峰夕照”，感受“宝石流霞”的独特光影[ 4]6。
灵隐寺（门票30元）及飞来峰景区（45元），体验佛教文化，周边可步行至满觉陇（春季赏桂，秋季品茶）236。
交通建议：住在西湖附近（如湖滨、南山路），方便全天游玩且避免堵车2。
2. 西溪国家湿地公园（推荐理由：自然生态，静谧悠闲）
景点亮点：
乘坐电瓶船游览（60元/人，四站式）2，穿梭于芦苇荡、河渚街、茭芦田庄等站点，观赏湿地野趣与水乡风情。
沿步道骑行或漫步，体验“曲水寻梅”“高庄花园”等景点，适合家庭或情侣多人出行。
行程安排：建议全天游玩（3-4小时），搭配午餐后返程26。
3. 九溪烟树 & 茶田徒步（推荐理由：山林徒步，茶文化体验）
景点亮点：
九溪十八涧：春秋季徒步（约4-8公里），沿溪流穿越山林，观赏红叶或翠绿茶田，推荐“满觉陇—九溪—杨梅岭”路线36。
龙井村：探访“茶乡第一村”，参观茶田、茶文化博物馆，体验采茶、炒茶（旺季需预约），适合摄影与亲子活动36。
特色活动：途中可在茶馆品龙井茶，或在满觉陇的民宿（如【如果·云夕】）小憩36。
`;

export default () => {
  // 消息列表
  const { messages, appendMsg, updateMsg } = useMessages([]);
  const msgRef = useRef(null);
  const typingMsgId = useRef('');
  const navigate = useNavigate();

  // 发送回调
  function handleSend(type: string, val: string) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      // setTimeout(() => {
      //   // 模拟接口第一次返回内容
      //   typingMsgId.current = appendMsg({
      //     type: 'stream',
      //     content: { text: '<p>亲，您遇到什么问题啦？请简要描述您的问题~</p>' },
      //     position: 'left',
      //   });
      // }, 800);

      setTimeout(() => {
        // 模拟接口第一次返回内容
        typingMsgId.current = appendMsg({
          type: 'stream',
          content: { text: mockContent.slice(0, 100) },
          position: 'left',
        });
      }, 500);

      setTimeout(() => {
        // 模拟接口更新内容
        if (typingMsgId.current) {
          updateMsg(typingMsgId.current, {
            type: 'stream',
            content: { text: mockContent.slice(0, 400) },
          });
        }
      }, 800);

      setTimeout(() => {
        // 模拟接口继续更新内容
        if (typingMsgId.current) {
          updateMsg(typingMsgId.current, {
            type: 'stream',
            content: { text: mockContent },
          });
        }

        // 模拟回答结束
        typingMsgId.current = '';
      }, 1000);
    }
  }

  const renderMarkdown = (content: string) => marked.parse(content) as string;

  function renderMessageContent(msg: MessageProps) {
    const { type, content } = msg;

    // 根据类型渲染消息气泡
    switch (type) {
      case 'text':
        return <Bubble data-animation='fadeInUp' content={content.text} />;
      case 'stream':
        return (
          <TypingBubble
            data-animation='fadeInUp'
            content={content.text}
            messageRender={renderMarkdown}
            isRichText
            options={{ step: [1, 6], interval: 100 }}
          />
        );
      case 'typing':
        return <Typing />;
      default:
        return null;
    }
  }

  return (
    <Chat
      isX
      navbar={{
        leftContent: {
          icon: 'chevron-left',
          title: 'Back',
          onClick() {
            navigate('/');
          },
        },
        title: '智能助理',
      }}
      toolbar={[{ type: 'image', icon: 'image', title: '图片' }]}
      messagesRef={msgRef}
      wideBreakpoint="800px"
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
      onImageSend={() => Promise.resolve()}
    />
  );
};
