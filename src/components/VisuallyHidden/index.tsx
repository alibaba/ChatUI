import React from 'react';

const style = {
  position: 'absolute',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  margin: '-1px',
  // padding: 0,
  // border: 0,
  whiteSpace: 'nowrap',
};

export const VisuallyHidden = (props: any) => {
  return <span style={style} {...props} />;
};
