import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { RichText } from '..';

afterEach(cleanup);

describe('<RichText />', () => {
  it('should render the plain text', () => {
    const { getByTestId } = render(<RichText content="testContent" data-testid="richText" />);
    const richText = getByTestId('richText');

    expect(richText).toHaveTextContent('testContent');
  });

  it('should render the rich text', () => {
    const { getByTestId } = render(
      <RichText content="<span data-testid='content'>foo</span>" data-testid="richText" />,
    );
    const richText = getByTestId('richText');
    const content = getByTestId('content');

    expect(richText).toContainHTML('<span data-testid="content">foo</span>');
    expect(richText).toContainElement(content);
  });
});
