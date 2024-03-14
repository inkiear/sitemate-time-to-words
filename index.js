/* eslint-disable radix */

const numbersMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const hour = time.split(':')[0];
  const minutes = time.split(':')[1];

  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }
  if (minutes === '00') {
    return `${numbersMap[hour]} o'clock`;
  }
  if (parseInt(minutes) < 30) {
    return `${numbersMap[minutes]} past ${numbersMap[hour]}`;
  }
  if (minutes === '30') {
    return `half past ${numbersMap[hour]}`;
  }
  if (minutes === '45') {
    return `quarter to ${numbersMap[parseInt(hour) + 1]}`;
  }
  if (parseInt(minutes, 12) > 30) {
    return `${numbersMap[60 - parseInt(minutes)]} to ${
      numbersMap[parseInt(hour) + 1]
    }`;
  }

  return '';
}

module.exports = { convertTimeToWords };
