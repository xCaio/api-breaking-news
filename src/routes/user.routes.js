const app = require('express').Router()
const userController = require('../controllers/user.controller')

const route = app.post('/', userController.create)

module.exports = route

