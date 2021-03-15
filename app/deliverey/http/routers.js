const express = require("express");
const middlewareExample = require("./middlewares/exampleMiddleware");
const router = express.Router();

const homeController = require("./controllers/homeController");

router.get("/axios/tes", homeController.tesFetchData)
router.get("/user/fetch", middlewareExample, homeController.fetchUser);
router.get("/redis/tes/:key",homeController.testRedis)
router.get("/:number", homeController.index);

module.exports = router;
