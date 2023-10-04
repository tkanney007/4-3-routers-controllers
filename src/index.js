const express = require("express");
const fruitRoute = require("./routes/fruitRoutes"); //Load the route modules
const userRoute = require("./routes/userRoutes");

const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
  console.log("This middleware is encountered before every endpoint");
  next(); //The next method allows the function to serve the next part of the server call.
});

app.use("/fruits", fruitRoute); //name the root route for all fruit routes /fruits.
// THK 3-Oct-2023: Added user routes for login and register
app.use("/user", userRoute);
// app.use("/user/register", userRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
