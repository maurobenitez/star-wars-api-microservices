const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const filmRouter = Router();

filmRouter.get("/", controllers.getfilms);

filmRouter.get("/:id", controllers.getfilm);

filmRouter.post("/", middlewares.filmValidation, controllers.createfilm);

module.exports = filmRouter;
