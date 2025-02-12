export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
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
