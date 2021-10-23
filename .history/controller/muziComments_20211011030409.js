import * as muziCommentsRepository from '../data/muziComments.js';

export async function getComments(req, res, next) {
  const muziId = req.params.muziId;
  const data = await muziCommentsRepository.getById(muziId);
  console.log(req.query);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'muzi not found' });
  }
}
