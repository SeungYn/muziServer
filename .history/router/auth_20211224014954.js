import express from 'express';
import 'express-async-errors';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateCredential = [
  body('username') //
    .trim(),
];

//signup
router.post('/signup', (req, res, next) => {});
