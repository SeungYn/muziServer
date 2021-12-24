import express from 'express';
import 'express-async-errors';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateCredential = [
  body('username') //
    .trim()
    .notEmpty()
    .withMessage('username should be at least 5 characters'),
];

//signup
router.post('/signup', (req, res, next) => {});
