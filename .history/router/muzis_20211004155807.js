import express from 'express';
import 'express-async-errors';
import body from 'express-validator';
import * as muzisController from '../controller/muzis.js';

const router = express.Router();
//Get /muzis
router.get('/', muzisController.getMuzis);

//Get /muzis/:id

router.get('/:id', muzisController.getMuzi);

//Post /musiz
router.post('/', muzisController.create);

router.put('/:id', muzisController.updateMuzi);

router.delete('/:id', muzisController.removeMuzi);
export default router;
