export const validate = (req, res, next) => {
  const errors = validaionResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({ message: errors.array()[0].msg });
};
