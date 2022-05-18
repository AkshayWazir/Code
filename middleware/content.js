const userData = [
  {
    id: 1,
    name: "Akshay",
    age: 45,
  },
  {
    id: 2,
    name: "Yash",
    age: 35,
  },
  {
    id: 3,
    name: "Raj",
    age: 25,
  },
  {
    id: 4,
    name: "Rohan",
    age: 15,
  },
];

module.exports.fetchUsers = (req, res, next) => {
  res.send(JSON.stringify(userData));
  console.log("User Data sent");
};

module.exports.fetUserData = (req, res, next) => {
  console.log("Fetch user Data");
};
