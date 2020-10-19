import bcrypt from 'bcrypt';

export default async function hashPass(pass) {
  try {
    const salt = await bcrypt.genSalt(8);
    const passHashed = bcrypt.hash(pass, salt);
    return passHashed;
  } catch (error) {
    console.log('Error on hash password', error);
  }
}
