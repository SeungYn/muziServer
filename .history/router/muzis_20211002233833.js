import express from 'express';
import 'express-async-errors';

let muzis = [
  {
    id: 1,
    text: '안녕하세요 저는 유승윤입니다.',
    createdAt: Date.now().toString(),
    username: '승캉',
    name: '유승윤',
  },
  {
    id: 2,
    text: '안녕하세요 저는 유승윤2니다.',
    createdAt: Date.now().toString(),
    username: '승캉',
    name: '유승윤',
  },
  {
    id: 3,
    text: '안녕하세요 저는 유승윤3니다.',
    createdAt: Date.now().toString(),
    username: 'tmddbs',
    name: '유승윤',
  },
];

const router = express.Router();
//Get /muzis
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username ? muzis.filter((m) => m.username === username) : muzis;
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `muzi id not found` });
  }
});

//Get /muzis/:id

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const data = muzis.filter((m) => m.id === id);
  res.status(200).json(data);
});

export default router;
