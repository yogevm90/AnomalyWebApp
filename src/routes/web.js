const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const restRequest = require("../controllers/rest");

let routes = app => {
  router.get("/", homeController.getHome);

  router.post("/", restRequest.handleRequest);

  return app.use("/", router);
};

module.exports = routes;