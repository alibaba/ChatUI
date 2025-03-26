const ua = navigator.userAgent;

export const isIOS = /iPad|iPhone|iPod/.test(ua);

export const isSafari = /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);

export const isSafariOrIOS11 = ua.includes('Safari/') || /OS 11_[0-3]\D/.test(ua);

export function getIOSMajorVersion() {
  const v = ua.match(/OS (\d+)_/);
  return v ? +v[1] : 0;
}

export const isArkWeb = ua.includes('ArkWeb');
