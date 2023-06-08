const loadUserFetch = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]))
    //To see error in api
    .catch((error) => console.log(error));
};

const displayUser = (users) => {
  console.log(users);
};

//simple async
const loadAsync = async () => {
  const url = "https://randomuser.me/api/?gender=female";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results[0]);
};

//to catch error

const loadAsync2 = async () => {
  try {
    const url = "https://randomuser2.me/api/?gender=female";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
  } catch (error) {
    console.log(error);
  }
};
