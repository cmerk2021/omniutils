function formatDate(date, format) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };

  // Customize the options based on the format string
  if (format.includes('YYYY')) {
    options.year = 'numeric';
  } else if (format.includes('YY')) {
    options.year = '2-digit';
  }

  if (format.includes('MMMM')) {
    options.month = 'long';
  } else if (format.includes('MMM')) {
    options.month = 'short';
  } else if (format.includes('MM')) {
    options.month = '2-digit';
  }

  if (format.includes('DD')) {
    options.day = '2-digit';
  }

  if (format.includes('HH')) {
    options.hour = '2-digit';
  }

  if (format.includes('hh')) {
    options.hour12 = true;
    options.hour = '2-digit';
  }

  if (format.includes('mm')) {
    options.minute = '2-digit';
  }

  if (format.includes('ss')) {
    options.second = '2-digit';
  }

  if (format.includes('a')) {
    options.hour12 = true;
  }

  if (format.includes('z')) {
    options.timeZoneName = 'short';
  } else if (format.includes('Z')) {
    options.timeZoneName = 'long';
  }

  const formattedDate = date.toLocaleDateString('en-US', options);

  return format.replace('YYYY', options.year)
    .replace('YY', options.year)
    .replace('MMMM', options.month)
    .replace('MMM', options.month)
    .replace('MM', options.month)
    .replace('DD', options.day)
    .replace('HH', options.hour)
    .replace('hh', options.hour)
    .replace('mm', options.minute)
    .replace('ss', options.second)
    .replace('a', options.hour12 ? date.toLocaleString('en-US', { hour12: true, hour: 'numeric' }).split(' ')[1] : '')
    .replace('z', options.timeZoneName)
    .replace('Z', options.timeZoneName);
}
function parseDate(dateString) {
  const formats = [
    // ISO 8601 formats
    'YYYY-MM-DDTHH:mm:ssZ',
    'YYYY-MM-DDTHH:mm:ss.SSS',
    'YYYY-MM-DDTHH:mm:ss',
    'YYYY-MM-DD',

    // Common US formats
    'MM/DD/YYYY',
    'MM/DD/YY',
    'MM-DD-YYYY',
    'MM-DD-YY',

    // Other formats
    'DD/MM/YYYY',
    'DD/MM/YY',
    'DD.MM.YYYY',
    'DD.MM.YY',

    // Formats with time zones
    'YYYY-MM-DDTHH:mm:ssZ',
    'YYYY-MM-DDTHH:mm:ss+00:00',
    'YYYY-MM-DDTHH:mm:ss-00:00',
    'YYYY-MM-DDTHH:mm:ss CST',
    'YYYY-MM-DDTHH:mm:ss PDT',
    // ... add more time zone formats as needed
  ];

  for (const format of formats) {
    const regex = new RegExp(`^${format}$`);
    const match = dateString.match(regex);

    if (match) {
      const [year, month, day, hour, minute, second] = match.slice(1);
      return new Date(year, month - 1, day, hour, minute, second);
    }
  }

  console.error('Invalid date format');
  return null;
}
function getTimezoneOffset(location) {
  const options = { timeZone: location };
  const formatter = new Intl.DateTimeFormat([], options);
  const { timezoneOffset } = formatter.resolvedOptions();
  return timezoneOffset;
}
function addDays(date, days) {
  const newDate = new Date(date); // Create a copy to avoid modifying the original
  newDate.setDate(newDate.getDate() + days);

  // If the day of the month has decreased, it means the month has changed
  if (newDate.getDate() < date.getDate()) {
    newDate.setMonth(newDate.getMonth() + 1);
  }

  return newDate;
}
function subtractDays(date, days) {
  const newDate = new Date(date); // Create a copy to avoid modifying the original
  newDate.setDate(newDate.getDate() - days);

  // If the day of the month has increased, it means the month has changed
  if (newDate.getDate() > date.getDate()) {
    newDate.setMonth(newDate.getMonth() - 1);
  }

  return newDate;
}

export {
    formatDate,
    parseDate,
    getTimezoneOffset,
    addDays,
    subtractDays
}