import formatDate from '../parser';

const timeLocale = {
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  formats: {
    LT: 'HH:mm',
    lll: 'M/D/YYYY HH:mm',
    WT: 'dddd HH:mm',
    YT: 'Yesterday HH:mm',
  },
};

const MS_A_DAY = 24 * 60 * 60 * 1000;

describe('Time parser', () => {
  it(`should format timestamp`, () => {
    expect(formatDate(1589951640000, timeLocale)).toBe('5/20/2020 13:14');
  });

  it(`should format date`, () => {
    expect(formatDate(new Date(2020, 4, 20, 13, 14), timeLocale)).toBe('5/20/2020 13:14');
  });

  it(`should display relative time (today)`, () => {
    const time = Date.now() - 100 * 1000;
    const $d = new Date(time);
    const HH = `${$d.getHours()}`.padStart(2, '0');
    const mm = `${$d.getMinutes()}`.padStart(2, '0');

    expect(formatDate(time, timeLocale)).toBe(`${HH}:${mm}`);
  });

  it(`should display relative time (yesterday)`, () => {
    const time = Date.now() - MS_A_DAY;
    const $d = new Date(time);
    const HH = `${$d.getHours()}`.padStart(2, '0');
    const mm = `${$d.getMinutes()}`.padStart(2, '0');

    expect(formatDate(time, timeLocale)).toBe(`Yesterday ${HH}:${mm}`);
  });

  it(`should display relative time (this week)`, () => {
    const time = Date.now() - 2 * MS_A_DAY;
    const $d = new Date(time);
    const HH = `${$d.getHours()}`.padStart(2, '0');
    const mm = `${$d.getMinutes()}`.padStart(2, '0');
    const dddd = timeLocale.weekdays[new Date(time).getDay()];

    expect(formatDate(time, timeLocale)).toBe(`${dddd} ${HH}:${mm}`);
  });
});
