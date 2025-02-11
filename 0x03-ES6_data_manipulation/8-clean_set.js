export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [];

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      filteredValues.push(item.slice(startString.length));
    }
  }
  return filteredValues.join('-');
}
