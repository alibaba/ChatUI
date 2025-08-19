export const oneDayInMs = 24 * 60 * 60 * 1000;

export const padZero = (t: number) => `${t < 10 ? '0' : ''}${t}`;

type IDate = string | number | Date;

export function parseDateTime(timestamp: IDate) {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: padZero(date.getMonth() + 1),
    day: padZero(date.getDate()),
    hours: padZero(date.getHours()),
    minutes: padZero(date.getMinutes()),
    seconds: padZero(date.getSeconds()),
  };
}

/**
 * 判断是否在24小时内
 */
export function isWithin24Hours(timestamp: number) {
  const now = Date.now();
  const timeDiff = Math.abs(timestamp - now);
  return timeDiff < oneDayInMs;
}

export function formatExpireTime(timestamp: IDate) {
  const d = parseDateTime(timestamp);
  return `${d.year}.${d.month}.${d.day} ${d.hours}:${d.minutes} 到期`;
}
