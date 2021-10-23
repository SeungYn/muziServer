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
  const { text, username, name } = req.body;
  const comment = await muziCommentsRepository.create(text, username, name);
  res.status(201).json(comment);
}
