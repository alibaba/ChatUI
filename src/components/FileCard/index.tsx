import React from 'react';
import clsx from 'clsx';
import { Card } from '../Card';
import { Flex, FlexItem } from '../Flex';
import { Icon } from '../Icon';
import { Text } from '../Text';
import getExtName from '../../utils/getExtName';
import prettyBytes from '../../utils/prettyBytes';

export interface FileCardProps {
  className?: string;
  file: File;
  extension?: string;
}

export const FileCard: React.FC<FileCardProps> = (props) => {
  const { className, file, extension, children } = props;
  const { name, size } = file;
  const ext = extension || getExtName(name);

  return (
    <Card className={clsx('FileCard', className)} size="xl">
      <Flex>
        <div className="FileCard-icon" data-type={ext}>
          <Icon type="file" />
          <Text truncate as="span" className="FileCard-ext">
            {ext}
          </Text>
        </div>
        <FlexItem>
          <Text truncate={2} breakWord className="FileCard-name">
            {name}
          </Text>
          <div className="FileCard-meta">
            {size != null && <span className="FileCard-size">{prettyBytes(size)}</span>}
            {children}
          </div>
        </FlexItem>
      </Flex>
    </Card>
  );
};
