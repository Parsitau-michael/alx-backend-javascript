import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResonse, userResponse]) => {
      console.log(`${photoResonse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
