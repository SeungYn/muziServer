import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as muzisCommentsController from '../controller/muziComments.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

//Get /muziComments/:muziId
router.get('/:id', muziCommentsController.getComments);

export default router;
