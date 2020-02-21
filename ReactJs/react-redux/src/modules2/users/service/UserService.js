
export async function list() {
  return await fetch('http://localhost:3001/users')
    .then((res) => res.json());
}

export async function get(id) {
  return await fetch(`http://localhost:3001/users/${id}`)
    .then((res) => res.json());
}

export async function save(user, method = 'POST') {
  const body = new FormData();

  for (const [ key, value ] of Object.entries(user)) {
    body.append(key, value);
  }

  console.log('before-request:', user, ', method:', method);
  return await fetch(
      `http://localhost:3001/users`,
      {
        method,
        body
      }
    ).then((res) => {
      return res.json();
    });
}
