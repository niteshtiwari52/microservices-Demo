const express = require("express")
const controllers = require("../Controllers")

const router = express.Router();


router.post("welcome" , controllers.userController.Welcome)
module.exports = router;