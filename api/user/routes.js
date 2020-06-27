const express = require("express")
const path = require('path')
const router = express.Router()
const controller = require("./controller.js")
const auth = require(path.join(path.dirname(require.main.filename), 'middleware/auth.js'))

// User Login Route
router.post("/login", controller.login)
router.post("/register", controller.register)
router.get("/me", auth, controller.me)

module.exports = router