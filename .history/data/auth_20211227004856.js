let users = [
  {
    id: '1',
    uesrname: 'tmddbs',
    password: '$2b$12$4dYaf/CuyRGjQPfKdPvCGuHj5AZkgCbHe1Ome.h5bQKFFSLn.Z4cy',
    name: '유승윤',
    email: 'tmddbs@gmail.com',
    url: '',
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };

  users.push(created);
  return created.id;
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}
