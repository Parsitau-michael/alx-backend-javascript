export default function cleanSet(set, startString) {
  const array = [];
  set.forEach((item) => {
    if (item.trim().includes(startString) && startString.length !== 0) {
      array.push(item.slice(startString.length));
    }
  });
  return array.join('-');
}
