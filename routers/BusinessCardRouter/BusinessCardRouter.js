const express = require("express");
const router = express.Router();
const {
	getBusinessAllUser, insertBusinessUser, getBusinessUserById
} = require("../../controllers/BusinessCardController/BusinessCardController");

router.route("/").get(getBusinessAllUser).post(insertBusinessUser);
router.route("/:id").get(getBusinessUserById)

module.exports = router; 