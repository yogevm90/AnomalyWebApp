const express = require("express")
const router = express.Router()
const homeController = require("../controllers/home")
const restRequest = require("../controllers/rest")
var multer  = require('multer')
var upload = multer({ dest: 'upload/'})
var type = upload.array("files", 10)

let routes = app => {
  router.get("/", homeController.getHome)
  router.post("/", restRequest.handleRequest)
  router.post("/detect", type, homeController.detect)

  return app.use("/", router)
};

module.exports = routes