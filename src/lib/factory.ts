import {Dimensions} from 'react-native';

export const tossEmojiCode = {
  sun: 2600,
};

const engDate = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const deviceWidth = Dimensions.get('screen').width;

export const deviceHeight = Dimensions.get('screen').height;

export const imagePlaceholder =
  'https://firebasestorage.googleapis.com/v0/b/nadaggu-c7aa2.appspot.com/o/placeholder%2Fimage-placeholder.png?alt=media&token=5cf936bf-a480-4eb2-a869-c261e17ffa53';

export const profilePlaceholder =
  'https://firebasestorage.googleapis.com/v0/b/nadaggu-c7aa2.appspot.com/o/placeholder%2Fprofile-placeholder.png?alt=media&token=cd8d2525-a209-4b9b-81df-6146bf1f146b';

export function generateTwoDigit(str: string | number) {
  return str.toString().length === 2 ? str : `0${str}`;
}

export function formatNumber(input: number) {
  return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function formatPhoneNumber(ph: string) {
  return `${ph.slice(0, 3)}-${ph.slice(3, 7)}-${ph.slice(7)}`;
}

export function formatNumberWithUnit(num: number) {
  if (num > 9999) {
    return `${num.toString().slice(0, num.toString().length - 4)}.${num
      .toString()
      .slice(1, 2)}만`;
  }

  if (num > 999) {
    return `${num.toString().slice(0, 1)}.${num.toString().slice(1, 2)}천`;
  }

  return formatNumber(num);
}

export function formatFeedDate(timestamp: number) {
  const _date = new Date(timestamp);

  const year = _date.getFullYear();
  const month = _date.getMonth() + 1;
  const date = _date.getDate();
  const day = _date.getDay();

  return `${year}.${month}.${date}_${engDate[day]}`;
}

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {
        r: 0,
        g: 0,
        b: 0,
      };
}

export function colorWithOpacity(color: string, opacity: number) {
  const rgb = hexToRgb(color);

  return `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`;
}

export function generateDeliveryLocation(
  postCode: string,
  basic: string,
  detail: string,
) {
  return `[${postCode}] ${basic} ${detail}`;
}

export function generateYearMonthDayWithTimestamp(
  timestamp: number,
  seperator: string,
) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}${seperator}${generateTwoDigit(
    month,
  )}${seperator}${generateTwoDigit(day)}`;
}

export function generateYearMonthDayTimeWithTimestamp(
  timestamp: number,
  seperator: string,
) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${year}${seperator}${generateTwoDigit(
    month,
  )}${seperator}${generateTwoDigit(day)} ${generateTwoDigit(
    hour,
  )}:${generateTwoDigit(minutes)}`;
}
