//Array of objects
const users = [{ id: 1, name: "abul", job: "doctor" }];

// console.log(users[0].name);

//How to access data
const data = {
  count: 5000,
  data: [
    {
      id: 1,
      name: "babul",
      job: "leader",
    },
    {
      id: 2,
      name: "shakib",
      job: "cricket",
    },
  ],
};

// console.log(data.data[1].job); 

const user = {
  id: 5001,
  name: "Thomas Bhai",
  address: {
    street: {
      first: "chapri",
      second: "third floor",
    },
    city: "Chittagong",
  },
};

console.log(user.address.street?.second);
