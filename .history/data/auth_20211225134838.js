let users = [];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };

  users.push(created);
  return created.id;
}

export async function fundById(id) {
  return users.find((user) => user.id === id);
}
