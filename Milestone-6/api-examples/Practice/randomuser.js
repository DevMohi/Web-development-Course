const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=7")
    .then((res) => res.json())
    .then((data) => displayUsers(data.results));
};

const displayUsers = (users) => {
  const usersContainer = document.getElementById("users-container");
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
        <h3>User Name</h3>
        <p>Email : ${user.email} </P
        <p>User Location: ${user.location.city}</p>
    `;
    usersContainer.appendChild(userDiv);
  }
};

loadUsers();


