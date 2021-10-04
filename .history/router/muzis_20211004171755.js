import express from 'express';
import 'express-async-errors';
import {body from 'express-validator';
import * as muzisController from '../controller/muzis.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateMuzi = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('text should be at last 3 characters'),
  validate,
];
//Get /muzis
router.get('/', muzisController.getMuzis);

//Get /muzis/:id

router.get('/:id', muzisController.getMuzi);

//Post /musiz
router.post('/', validateMuzi, muzisController.create);

router.put('/:id', muzisController.updateMuzi);

router.delete('/:id', muzisController.removeMuzi);
export default router;
