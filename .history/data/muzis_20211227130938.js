import * as authRepository from './auth.js';
let muzis = [
  {
    id: '1',
    text: '안녕하세요 저는 유승윤입니다.',
    createdAt: new Date().toString(),
    userId: '1',
    commentsCount: 3,
  },
  {
    id: '2',
    text: '안녕하세요 저는 유승윤2니다.',
    createdAt: new Date().toString(),
    userId: '1',
    commentsCount: 1,
  },
  {
    id: '3',
    text: '안녕하세요 저는 유승윤3니다.',
    createdAt: new Date().toString(),
    userId: '1',
    commentsCount: 0,
  },
];

export async function getAll() {
  return Promise.all(
    muzis.map(async (muzi) => {
      const { username, name, url } = await authRepository.findById(
        muzi.userId
      );
      return { ...muzi, username, name, url };
    })
  );
}

export async function getAllByUsername(username) {
  return getAll().then((muzis) =>
    muzis.filter((muzi) => muzi.username === username);
  )
}

export async function getById(id) {
  return muzis.find((m) => m.id === id);
}

export async function create(text, name, username) {
  const muzi = {
    id: Date.now().toString(),
    text,
    username,
    name,
    createdAt: new Date.now().toString(),
    commentsCount: 0,
  };

  muzis = [...muzis, muzi];
  return muzi;
}

export async function update(id, text) {
  const muzi = muzis.find((m) => m.id === id);
  if (muzi) {
    muzi.text = text;
  }
  return muzi;
}

export async function remove(id) {
  muzis = muzis.filter((m) => m.id !== id);
}

export async function commentCountUp(id) {
  const muzi = muzis.find((muzi) => muzi.id === id);
  muzi.commentsCount += 1;
}

export async function commentCountDown(id) {
  const muzi = muzis.find((muzi) => muzi.id === id);
  const count = muzi.commentsCount - 1;
  if (count < 0) {
    muzi.commentsCount = 0;
  } else {
    muzi.commentsCount = count;
  }
}
