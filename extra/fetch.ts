async function fetchUsers() {
  try {
    let data = await (
      await fetch("http://localhost:3000/api/setupTodos")
    ).json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchUsers();