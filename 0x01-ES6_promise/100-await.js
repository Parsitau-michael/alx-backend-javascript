import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const uploadPhotoResponse = await (uploadPhoto());
    const createUserResponse = await (createUser());
    return { photo: uploadPhotoResponse, user: createUserResponse };
  } catch (error) {
    return { photo: null, user: null };
  }
}

module.exports = asyncUploadUser;
