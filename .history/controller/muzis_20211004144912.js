import * as muzisRepository from '../data/muzis.js';

export async function getMuzis(req, res, next) {
  const username = req.query.username;
  const data = awiat(
    username
      ? muzisRepository.getAllByUsername(username)
      : muzisRepository.getAll()
  );
}
