const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const planetRouter = Router();

planetRouter.get("/", controllers.getplanets);

planetRouter.get("/:id", controllers.getplanet);

planetRouter.post("/", middlewares.planetValidation, controllers.createplanet);

module.exports = planetRouter;
