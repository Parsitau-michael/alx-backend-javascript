export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('API Call Successful');
    } else {
      reject(new Error('failed'));
    }
  });
}
