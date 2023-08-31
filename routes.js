const express = require("express");
const router = express.Router();

const { AddWalkthrough, getWalkthroughs } = require("./controller")

router.route("/").get(getWalkthroughs)

router.route("/AddWalkthrough").post(AddWalkthrough)

module.exports = router