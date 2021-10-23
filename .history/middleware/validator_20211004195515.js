import { validationResult } from 'express-validator';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  }
  res.status(400).json({ message: errors.array()[0].msg });
};
