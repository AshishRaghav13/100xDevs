const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
app.use(express.json())



const ALL_USERS = [
  {
    username: "ashish@gmail.com",
    password: "123",
    name: "ashish",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  for(let i = 0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
      return true;
    }
    else{
      return false;
    }
  }
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username}, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
  res.json({
    users:ALL_USERS,
  })
});

app.listen(3000)