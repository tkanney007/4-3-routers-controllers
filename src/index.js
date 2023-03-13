const express = require("express");
const fruitRoute = require("./routes/fruitRoutes"); //Load the route modules

const app = express();
const port = 3000;
app.use(express.json());

app.use("/fruits", fruitRoute); //name the root route for all fruit routes /fruits.

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});