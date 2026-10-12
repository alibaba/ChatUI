import getUrlParam from './getUrlParam';

const SCALE_MAP: Record<string, string> = {
  '1.3': 'xlarge',
  '1.14': 'large',
};

export default function applyUrlParams() {
  const { dataset } = document.documentElement;

  const scale = getUrlParam('scale');
  if (scale && SCALE_MAP[scale]) {
    dataset.fontScale = SCALE_MAP[scale];
  }

  const colorScheme = getUrlParam('colorScheme');
  if (colorScheme) {
    dataset.colorScheme = colorScheme;
  }
}
