export const weakMap = new WeakMap();

let queryCount = 0;

export function queryAPI(endpointArg) {
  if (queryCount >= 5) throw new Error('Endpoint load is high');
  queryCount += 1;
  weakMap.set(endpointArg, queryCount);
}
