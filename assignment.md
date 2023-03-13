## Assignment

### Brief

Create a route file called `userRoutes.js` and a controller file called `userController.js`

The user routes would have the following endpoints:
1. POST /login
2. POST /register

In userController.js, copy the following array:
```js
const user = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]
```

The controller would have the following functions:
1. On Login, the function would compare a username / password combination to the existing users and returns "Login successful" or "Login failed" as needed.
2. On Register, the function would create a new user and add it to the array. Make sure to add an ID field and check if all the fields exists before a user can be added.

The server file would have "/user" as it's root route for all user routes.

### Submission 

- Submit the URL of the GitHub Repository that contains your work.
- Should you reference the work of your classmate(s) or online resources, give them credit by adding either the name of your classmate or URL. 

### References

_Example of Referencing Classmate_

Referenced the code block below.
```js
    //This code is referenced from <source>
    function printMe(){
        console.log("I am a reference example");
    }
```

_Example of Referencing Online Resources_

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/html/
- https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github

