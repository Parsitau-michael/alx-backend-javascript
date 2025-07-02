export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  // Get the current count for the endpoint, defaulting to 0 if not found
  const count = weakMap.get(endpointArg);
  const newCount = count ? count + 1 : 1;

  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpointArg, newCount);
}
