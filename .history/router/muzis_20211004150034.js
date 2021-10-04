import express from 'express';
import 'express-async-errors';
import * as muzisController from '../controller/muzis.js';

const router = express.Router();
//Get /muzis
router.get('/', muzisController.getMuzis);

//Get /muzis/:id

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = muzis.filter((m) => m.id === id);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `muzi id not found` });
  }
});

//Post /musiz
router.post('/', (req, res, next) => {
  const { text, username, name } = req.body;
  const muzi = {
    id: Date.now().toString(),
    text,
    username,
    name,
    createdAt: Date.now().toString(),
  };

  muzis = [muzi, ...muzis];
  res.status(201).json(muzi);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const muzi = muzis.find((m) => m.id === id);
  if (muzi) {
    muzi.text = text;
    res.status(200).json(muzi);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  muzis = muzis.filter((m) => m.id !== id);
  res.sendStatus(204);
});
export default router;
