import React from 'react';

/**
 * 圆角矩形边框跑马灯
 * - SVG <rect> + stroke-dasharray + stroke-dashoffset 实现「沿真实周长匀速」绕圈跑马
 * - 四层 rect 重叠：
 *     base  — 整圈底色（brand-1 @ 65%）
 *     outer — 最外羽化（宽亮段、弱透）
 *     mid   — 中间过渡
 *     core  — 内核高亮（窄亮段、全不透）
 *   三层 sweep 中心始终同步，叠加后亮段两端自然渐变
 * - rx / ry 采双重设置：
 *     · SVG attribute rx="6" ry="6" 作为兜底（对齐 var(--radius-md) 当前值），老版 Android WebView
 *       （< Chrome 65，不支持 CSS 形式的 rx/ry）走这里，保证圆角可见
 *     · CSS 中 rx: var(--radius-md) 会被现代浏览器优先采纳（CSS property 优先级 > presentation attribute），
 *       保留对主题变量的响应能力
 * - pathLength="100" 把任意尺寸下的周长归一化为 100，dasharray / dashoffset 用无单位数字
 *   与容器实际像素解耦
 * - SVG 自身不带 viewBox，width/height = 100% 直接以容器像素为坐标系，
 *   rx 与 stroke 均不会被拉伸畸变
 * - 默认 opacity:0，由 .Composer[data-voice-status='recording'] 切换为可见
 */
export const MarqueeBorder: React.FC = () => (
  <svg className="Composer-marquee" aria-hidden focusable="false">
    <rect
      className="Composer-marquee-base"
      width="100%"
      height="100%"
      rx="6"
      ry="6"
      pathLength="100"
    />
    <rect
      className="Composer-marquee-sweep Composer-marquee-sweep--outer"
      width="100%"
      height="100%"
      rx="6"
      ry="6"
      pathLength="100"
    />
    <rect
      className="Composer-marquee-sweep Composer-marquee-sweep--mid"
      width="100%"
      height="100%"
      rx="6"
      ry="6"
      pathLength="100"
    />
    <rect
      className="Composer-marquee-sweep Composer-marquee-sweep--core"
      width="100%"
      height="100%"
      rx="6"
      ry="6"
      pathLength="100"
    />
  </svg>
);
