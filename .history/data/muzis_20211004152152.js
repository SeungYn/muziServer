let muzis = [
  {
    id: '1',
    text: '안녕하세요 저는 유승윤입니다.',
    createdAt: Date.now().toString(),
    username: '승캉',
    name: '유승윤',
  },
  {
    id: '2',
    text: '안녕하세요 저는 유승윤2니다.',
    createdAt: Date.now().toString(),
    username: '승캉',
    name: '유승윤',
  },
  {
    id: '3',
    text: '안녕하세요 저는 유승윤3니다.',
    createdAt: Date.now().toString(),
    username: 'tmddbs',
    name: '유승윤',
  },
];

export async function getAll() {
  return muzis;
}

export async function getAllByUsername(username) {
  return muzis.filter((m) => m.username === username);
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
    createdAt: Date.now().toString(),
  };

  muzis = [muzi, ...muzis];
  return muzi;
}

export async function update(id, text) {
  const muzi = muzis.find((m) => m.id === id);
  if (muzi) {
    muzi.text = text;
  }
}
