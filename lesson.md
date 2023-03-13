## Brief

### Preparation

Create a new express project with the students via the `npm init` and `npm install express`.

### Lesson Overview

This lesson focuses on routes and controllers. The first part will be focusing on using express.Router to group routes for easier tracking. The second part focuses on controllers that would contain the functionalities.

---

## Part 1 - Express Router Object

As discussed in the previous lesson, routes contain the endpoints and process the supported requests and any information encoded in request URLs. In most cases, the endpoints will belong to groups. The express.Router object creates modular, mountable route handlers.

Create a directory called `routes` and a file inside called `fruitRoutes.js`

```js
//fruitRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`This is the GET route for /fruits`);
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.send(`This is the GET route for /fruits with id of ${id}`)
});

module.exports = router;

//index.js
const express = require("express");
const fruitRoute = require("./routes/fruitRoutes"); //Load the route modules

const app = express();
const port = 3000;
app.use(express.json());

app.use("/fruits", fruitRoute); //name the root route for all fruit routes /fruits.

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
```

The routes file can be used for route groups that belong to the same parent endpoint. Using the `app.use()` in the index file, the routes can be named and be used.

Continue by adding the previous functionality for the GET routes.
```js
//fruitRoute.js
const fruits = [
    {
        id : 1,
        name : "banana"
    },
    {
        id : 2,
        name : "mango"
    }
]

router.get("/", (req, res) => {
    res.json(fruits);
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    for (let fruit of fruits) {
        if (fruit.id == id) {
          res.status(200);
          return res.send(fruit);
        }
    }
    res.status(404);
    res.send("Fruit not found");
});

router.post("/", function (req, res) {
    if (fruits.length > 0 && fruits.some((f) => f.name === req.body.name)) {
        res.status(409);
        return res.send("Fruit already exists");
    }
    let index = fruits[fruits.length - 1].id + 1;
    const newFruit = {
        id : index,
        name : req.body.name
    }
    fruits.push(newFruit);
    res.json(newFruit);
});
```

Test the routes in Postman or YARC to test if the routes are working.

### Mini Exercise

Implement the EDIT and DELETE endpoints in the router file.

---

## Part 2 - Controllers

In the previous section, all the routes have been moved to the router file, and the server file looks better. However, now the route file looks cluttered. 

The purpose of the route file is only to provide the possible endpoints the server can have and should not contain any data processing.

This is where the controller comes in. The controller contains the processing and is also where the requested data from models (this will be discussed in future lessons) and databases are obtained.

By moving the processing to the controller, the functionality of each file is defined clearly. This makes debugging easier and the process more defined.

Create a directory called `controllers` and a file inside called `fruitController.js`.

Move the array and the functions in the controller.

```js
//fruitController.js
const fruits = [
    {
        id : 1,
        name : "banana"
    },
    {
        id : 2,
        name : "mango"
    }
]

exports.getAllFruits = (req, res) => {
    res.json(fruits);
}

exports.getSingleFruit = (req, res) => {
    for (let fruit of fruits) {
        console.log(req.params.id);
        if (fruit.id == req.params.id) {
          res.status(200);
          return res.send(fruit);
        }
    }
    res.status(404);
    res.send("Fruit not found");
}

exports.addNewFruit = (req, res) => {
    if (fruits.length > 0 && fruits.some((f) => f.name === req.body.name)) {
        res.status(409);
        return res.send("Fruit already exists");
    }
    let index = fruits[fruits.length - 1].id + 1;
    const newFruit = {
        id : index,
        name : req.body.name
    }
    fruits.push(newFruit);
    res.json(newFruit);
}
```

Refactor `fruitRoute.js` by doing the following:
1. importing the fruitController file
2. removing the anonymous functions in all the routes
3. adding the functions via `fruitsController.<functionName>`

*Question: Why is it that to use a function in this case, there is no need to () after the function name?*

```js
//fruitRoute.js
const express = require("express");
const router = express.Router();
const fruitController = require("../controllers/fruitController");

router.get("/", fruitController.getAllFruits);

router.get("/:id", fruitController.getSingleFruit);

router.post("/", fruitController.addNewFruit);

module.exports = router;
```

Test the endpoints again via Postman or YARC to see if the server endpoints still work.

### Mini Exercise

Implement the PUT and DELETE functions in the controller file.

---

