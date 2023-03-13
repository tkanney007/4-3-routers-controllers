const express = require("express");
const router = express.Router();
const fruitController = require("../controllers/fruitController");

router.get("/", fruitController.getAllFruits);

router.get("/:id", fruitController.getSingleFruit);

router.post("/", fruitController.addNewFruit);

module.exports = router;