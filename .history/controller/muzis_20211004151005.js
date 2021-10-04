import * as muzisRepository from '../data/muzis.js';

export async function getMuzis(req, res, next) {
  const username = req.query.username;
  const data = await (username
    ? muzisRepository.getAllByUsername(username)
    : muzisRepository.getAll());
  res.status(200).json(data);
}

export async function getMuzi(req, res, next) {
  const id = req.params.id;
  const data = await muzisRepository.getById(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `muzi id not found` });
  }
}
