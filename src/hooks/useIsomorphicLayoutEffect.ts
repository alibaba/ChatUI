import { useEffect, useLayoutEffect } from 'react';

/**
 * 同构的 useLayoutEffect
 *
 * 在浏览器环境中使用 useLayoutEffect（避免视觉闪烁），
 * 在服务端渲染（SSR）环境中降级为 useEffect（避免 React 警告）。
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
