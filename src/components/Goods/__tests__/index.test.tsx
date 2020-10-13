import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Goods } from '..';

afterEach(cleanup);

describe('<Goods />', () => {
  it('should render the name', () => {
    const { getByTestId } = render(<Goods name="testName" data-testid="goods" />);
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Goods-name')).toHaveTextContent('testName');
  });

  it('should render the image', () => {
    const img = '//gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg';
    const { getByTestId } = render(<Goods name="testName" img={img} data-testid="goods" />);
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Goods-img')).toHaveAttribute('src', img);
  });

  it('should render the description', () => {
    const { getByTestId } = render(<Goods name="testName" desc="testDesc" data-testid="goods" />);
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Goods-desc')).toHaveTextContent('testDesc');
  });

  it('should render the tags', () => {
    const { getByTestId } = render(
      <Goods name="testName" tags={[{ name: 'tag1' }, { name: 'tag2' }]} data-testid="goods" />,
    );
    const goods = getByTestId('goods');

    expect(goods.querySelectorAll('.Tag').length).toBe(2);
  });

  it('should render the price', () => {
    const { getByTestId } = render(<Goods name="testName" price={123} data-testid="goods" />);
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Price')).toHaveTextContent('123');
  });

  it('should render the original price', () => {
    const { getByTestId } = render(
      <Goods name="testName" price={123} originalPrice={321} data-testid="goods" />,
    );
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Price')).toHaveTextContent('123');
    expect(goods.querySelector('.Price--original')).toHaveTextContent('321');
  });

  it('should render the meta content', () => {
    const { getByTestId } = render(<Goods name="testName" meta="testMeta" data-testid="goods" />);
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Goods-meta')).toHaveTextContent('testMeta');
  });

  it('should render the count', () => {
    const { getByTestId } = render(
      <Goods name="testName" count={123} unit="g" data-testid="goods" />,
    );
    const goods = getByTestId('goods');

    expect(goods.querySelector('.Goods-count')).toHaveTextContent('×123');
    expect(goods.querySelector('.Goods-unit')).toHaveTextContent('g');
  });

  it('should render the action', (done) => {
    const { getByTestId } = render(
      <Goods name="testName" action={{ onClick: () => done() }} data-testid="goods" />,
    );
    const goods = getByTestId('goods');
    const btn = goods.querySelector('.Goods-buyBtn');

    if (btn) {
      fireEvent.click(btn);
    }
  });

  it('should render order', () => {
    const { getByTestId } = render(
      <Goods type="order" name="testName" action={{ label: 'testAction' }} data-testid="order" />,
    );
    const order = getByTestId('order');

    expect(order.querySelector('.Goods-name')).toHaveTextContent('testName');
    expect(order.querySelector('.Goods-aside')).not.toBeNull();
    expect(order.querySelector('.Goods-detailBtn')).toHaveTextContent('testAction');
  });
});
