import * as authRepository from '../data/auth.js';
import jwt from 'jsonwebtoken';
import * as authRepository from '../data/auth.js';

const jwtSecretkey = 'j2h135';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

export async function singup(req, res) {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return req.statue(409).json({ message: `${username} already exists` });
  }
}
