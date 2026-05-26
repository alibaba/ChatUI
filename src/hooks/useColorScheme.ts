import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export type ColorScheme = 'light' | 'dark' | 'auto';
export type ResolvedColorScheme = 'light' | 'dark';

const MEDIA_QUERY = '(prefers-color-scheme: dark)';

const getSystemColorScheme = (): ResolvedColorScheme =>
  window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';

const resolveColorScheme = (colorScheme: ColorScheme): ResolvedColorScheme =>
  colorScheme === 'auto' ? getSystemColorScheme() : colorScheme;

/**
 * 处理颜色主题的 Hook
 *
 * 特性：
 * - 支持 'light' | 'dark' | 'auto' 三种模式
 * - 自动监听系统主题变化（auto 模式）
 * - 同步更新 document.documentElement.dataset.colorScheme
 * - 支持 SSR，服务端默认返回 'light'
 * - 使用 useLayoutEffect 确保主题在绘制前应用，避免闪烁
 *
 * @param colorScheme - 主题模式，默认为 'light'
 * @returns 当前实际应用的主题 'light' | 'dark'
 */
export function useColorScheme(colorScheme: ColorScheme = 'light'): ResolvedColorScheme {
  // 根据 colorScheme 计算实际应使用的主题
  const computeResolvedScheme = (): ResolvedColorScheme => resolveColorScheme(colorScheme);

  // 使用函数式初始值避免重复计算
  const [resolvedScheme, setResolvedScheme] = useState<ResolvedColorScheme>(() =>
    typeof window !== 'undefined' ? computeResolvedScheme() : 'light',
  );

  // 处理 colorScheme 变化（非 auto 模式或初始值）
  useIsomorphicLayoutEffect(() => {
    setResolvedScheme(computeResolvedScheme());
  }, [colorScheme]);

  // 监听系统主题变化（仅在 auto 模式下）
  useEffect(() => {
    if (colorScheme !== 'auto') return;

    const mediaQuery = window.matchMedia(MEDIA_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      setResolvedScheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [colorScheme]);

  // 同步到 DOM（使用 layout effect 避免闪烁）
  useIsomorphicLayoutEffect(() => {
    document.documentElement.dataset.colorScheme = resolvedScheme;
  }, [resolvedScheme]);

  return resolvedScheme;
}
