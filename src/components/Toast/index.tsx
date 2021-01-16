import React from 'react';
import { mountComponent } from '../../utils/mountComponent';
import { Toast } from './Toast';

function show(content: string, type: string, duration = 2000) {
  mountComponent(<Toast content={content} type={type} duration={duration} />);
}

export const toast = {
  show,
  success(content: string, duration?: number) {
    show(content, 'success', duration);
  },
  fail(content: string, duration?: number) {
    show(content, 'error', duration);
  },
  loading(content: string, duration?: number) {
    show(content, 'loading', duration);
  },
};
