const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const k = 1024;

export default (bytes: number, decimals?: number) => {
  if (bytes < 1) {
    return `${bytes} ${UNITS[0]}`;
  }

  const dm = decimals || 2;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${UNITS[i]}`;
};
