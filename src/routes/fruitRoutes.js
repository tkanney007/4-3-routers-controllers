const express = require("express");
const router = express.Router();
const fruitController = require("../controllers/fruitController");

const routeMiddleWare = (req, res, next) => {
    if(req.body.role === "admin"){
        next();
    } else {
        res.status(403);
        res.send("Only admins can access this endpoint");
    }
}

router.get("/", fruitController.getAllFruits);

router.get("/:id", fruitController.getSingleFruit);

router.post("/", routeMiddleWare, fruitController.addNewFruit);

module.exports = router;