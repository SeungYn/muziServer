import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as muzisController from '../controller/muzis.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

//Get /muziComments
router.get('/', muziCommentsController.getComments);

export default router;
