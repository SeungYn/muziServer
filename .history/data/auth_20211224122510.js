let users = [];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}
