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

export async function create(req, res, next) {
  const { text, userId } = req.body;
  const muzi = await muzisRepository.create(text, userId);
  res.status(201).json(muzi);
}

export async function updateMuzi(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const muzi = await muzisRepository.update(id, text);
  if (muzi) {
    res.status(200).json(muzi);
  } else {
    res.sendStatus(404);
  }
}

export async function removeMuzi(req, res, next) {
  const id = req.params.id;
  await muzisRepository.remove(id);
  res.sendStatus(204);
}
