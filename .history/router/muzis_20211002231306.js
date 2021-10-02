import express from 'express';
import 'express-async-errors';

let muzi = [
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

export default router;
