import React from 'react';
import { IconButton, IconButtonProps } from '../IconButton';

export const Action: React.FC<IconButtonProps> = (props) => (
  <div className="Composer-actions" data-action-icon={props.icon}>
    <IconButton size="lg" {...props} />
  </div>
);
