let params: URLSearchParams | null = null;

export default function getUrlParam(key: string): string | null {
  if (!params) {
    // eslint-disable-next-line compat/compat
    params = new URLSearchParams(window.location.search);
  }
  return params.get(key);
}
