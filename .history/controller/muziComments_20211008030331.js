import * as muziCommentsRepository from '../data/muziComments.js';

export async function getComments(req, res, next) {
  const muziId = req.params.muziId;
  console.log(f);
  const data = await muziCommentsRepository.getById(muziId);
  if (data) {
    res.statu(200).json(data);
  } else {
    res.status(404).json({ message: 'muzi not found' });
  }
}
