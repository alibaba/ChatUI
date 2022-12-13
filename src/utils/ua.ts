const ua = navigator.userAgent;

export function isIOS() {
  return /iPad|iPhone|iPod/.test(ua);
}

export function isSafari() {
  return /^((?!chrome|android|crios|fxios).)*safari/i.test(ua);
}

export function isSafariOrIOS11() {
  return ua.includes('Safari/') || /OS 11_[0-3]\D/.test(ua);
}

export function getIOSMajorVersion() {
  const v = ua.match(/OS (\d+)_/);
  return v ? +v[1] : 0;
}
