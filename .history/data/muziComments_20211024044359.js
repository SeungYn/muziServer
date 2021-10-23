let comments = [
  {
    muziId: '1',
    text: '안녕하세요 저는 유승윤1 댓글1 입니다.',
    createdAt: Date.now().toString(),
    username: 'tmddbs',
    name: '유승윤',
  },
  {
    muziId: '1',
    text: '안녕하세요 저는 유승윤1 댓글2 입니다.',
    createdAt: (Date.now() + 1).toString(),
    username: 'tmddbs',
    name: '유승윤',
  },
  {
    muziId: '1',
    text: '안녕하세요 저는 유승윤1 댓글3 입니다.',
    createdAt: (Date.now() + 2).toString(),
    username: 'tmddbs',
    name: '유승윤',
  },
  {
    muziId: '2',
    text: '안녕하세요 저는 유승윤2 댓글1 입니다.',
    createdAt: (Date.now() + 3).toString(),
    username: '한중영',
    name: '한준영',
  },
];

export async function getById(muziId) {
  return comments.filter((c) => c.muziId === muziId);
}

export async function create(muziId, text, name, username) {
  const comment = {
    muziId,
    text,
    username,
    name,
    createdAt: Date.now().toString(),
  };
  console.log(muziId);
  comments = [...comments, comment];
  return comment;
}

export async function update(muziId, created, text) {
  const items = comments.filter((comment) => comment.muziId === muziId);
  const comment = items.find((comment) => comment.createdAt === created);
  if (comment) {
    comment.text = text;
  }
  return comment;
}

export async function remove(created) {
  comments = comments.filter((comment) => comment.createdAt !== created);
}
