import * as muzisRepository from '../data/muzis.js';

export async function getMuzis(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? muzisRepository.getAllByUsername(username)
    : muzisRepository.getAll());
  res.status(200).json(data);
}
