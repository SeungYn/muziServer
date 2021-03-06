import * as muziCommentsRepository from '../data/muziComments.js';

export async function getComments(req, res, next) {
  const muziId = req.params.muziId;
  const data = await muziCommentsRepository.getById(muziId);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'muzi not found' });
  }
}

export async function createComment(req, res, next) {
  const { muziId, text, username, name } = req.body;
  const comment = await muziCommentsRepository.create(
    muziId,
    text,
    username,
    name
  );
  res.status(201).json(comment);
}

export async function updateComment(req, res, next) {
  const { created, muziId } = req.params;
  const text = req.body.text;
  const comment = await muziCommentsRepository.update(muziId, created, text);
  if (comment) {
    res.status(200).json(comment);
  } else {
    res.sendStatus(404);
  }
}

export async function removeComment(req, res, next) {
  const { created, muziId } = req.params;
  await muziCommentsRepository.remove(created, muziId);
  res.sendStatus(204);
}
