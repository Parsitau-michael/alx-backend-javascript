export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  // Get the current count for the endpoint, defaulting to 0 if not found
  let count = weakMap.get(endpointArg) || 0;

  if (count >= 5) throw new Error('Endpoint load is high');

  count += 1;
  weakMap.set(endpointArg, count);
}
