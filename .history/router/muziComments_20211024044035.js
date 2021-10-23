import express from 'express';
import 'express-async-errors';
import * as muziCommentsController from '../controller/muziComments.js';
import { body } from 'express-validator';

import { validate } from '../middleware/validator.js';

const router = express.Router();

//Get /muziComments/:muziId
router.get('/:muziId', muziCommentsController.getComments);

//post comment
router.post('/', muziCommentsController.createComment);

router.put('/:muziId&:created', muziCommentsController.updateComment);

router.delete('/:created', muziCommentsController.removeComment);
export default router;
