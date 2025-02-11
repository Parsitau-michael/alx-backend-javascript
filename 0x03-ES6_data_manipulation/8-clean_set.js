export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }

  const array = [];
  set.forEach((item) => {
    if (item.trim().includes(startString)) {
      array.push(item.slice(startString.length));
    }
  });
  return array.join('-');
}
