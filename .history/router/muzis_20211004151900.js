import express from 'express';
import 'express-async-errors';
import * as muzisController from '../controller/muzis.js';

const router = express.Router();
//Get /muzis
router.get('/', muzisController.getMuzis);

//Get /muzis/:id

router.get('/:id', muzisController.getMuzi);

//Post /musiz
router.post('/', muzisController.create);

router.put('/:id', muzisController.updateMuzi);

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  muzis = muzis.filter((m) => m.id !== id);
  res.sendStatus(204);
});
export default router;
