import React, { useState } from 'react';
import { Popup, Card, Goods, Tabs, Tab, Button, Search, Confirm } from '../../../src';

export default () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Popup
      className="OrdderSelector"
      active={active}
      onClose={() => {
        setActive(false);
      }}
      title="请选择您要咨询的订单"
      actions={[{ label: '没有对应订单' }]}
    >
      <div>
        <Tabs index={tabIndex} onChange={setTabIndex}>
          <Tab label="已购买">
            <div>
              <Search
                placeholder="输入宝贝关键词等"
                onSearch={(q) => {
                  console.log(q);
                }}
                onClear={() => {
                  console.log('cancel');
                }}
              />
              <Card className="OrderGroup">
                <div className="OrderGroup-header">
                  <h3>耐克官方旗舰店最多字数…</h3>
                  <span className="OrderGroup-status">交易状态</span>
                </div>
                <div className="OrderGroup-list">
                  <Goods
                    type="order"
                    img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
                    name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
                    desc="颜色分类：棕色；42码"
                    currency="¥"
                    price={30000.04}
                    count={1}
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                </div>
                <div className="OrderGroup-actions">
                  <Button size="sm">订单详情</Button>
                  <Button color="primary" size="sm">
                    发送
                  </Button>
                </div>
              </Card>
            </div>
          </Tab>
          <Tab label="购物车">
            <p>内容2</p>
          </Tab>
          <Tab label="收藏夹">
            <p>内容3</p>
          </Tab>
          <Tab label="足迹">
            <p>内容3</p>
          </Tab>
        </Tabs>
        <Confirm
          active={open}
          title="确认要发送吗？"
          onClose={() => {
            setOpen(false);
          }}
          actions={[
            {
              label: '确认',
              color: 'primary',
            },
            {
              label: '取消',
            },
          ]}
        >
          <div>Content 1</div>
        </Confirm>
      </div>
    </Popup>
  );
};
