export async function getComments(req, res, next) {
  const muziId = req.params.id;
  const data = await muziCommentsRepository.getById(id);
  if (data) {
    res.statu(200).json(data);
  } else {
    res.status(404).json({ message: 'muzi not found' });
  }
}