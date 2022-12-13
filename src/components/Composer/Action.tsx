import React from 'react';
import { IconButton, IconButtonProps } from '../IconButton';

export const Action = (props: IconButtonProps) => (
  <div className="Composer-actions" data-action-icon={props.icon}>
    <IconButton size="lg" {...props} />
  </div>
);
