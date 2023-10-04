const user = [
  {
    id: 1,
    username: "bsmithw3",
    email: "bsmith@mail.com",
    password: "bsmithw3_2023",
    name: "Brandon Smith",
  },
  {
    id: 2,
    username: "swoow3",
    email: "swoo@mail.com",
    password: "swoo_w3schools",
    name: "Samantha Woo",
  },
];

const login = (req, res) => {
  console.log("Here");
  const { username, password } = req.body;
  const allowed = user.some((item) => {
    return item.username == username && item.password == password;
  });
  if (allowed) {
    res.status(200);
    res.send("Login successful");
  } else {
    res.status(401);
    res.send("Login failed");
  }
};

const register = (req, res) => {
  const { username, email, password, name } = req.body;
  if (user.some((item) => item.username == username || item.email == email)) {
    res.status(403);
    return res.send("User already exists!");
  }
  let index = user[user.length - 1].id + 1;
  let newUser = {
    id: index,
    username: username,
    email: email,
    password: password,
    name: name,
  };
  user.push(newUser);
  console.log(user);
  res.status(200);
  res.send("User created.");
};

module.exports = {
  login,
  register,
};
