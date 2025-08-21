const app = require('express').Router()
const userController = require('../controllers/user.controller')

const route = app.get('/', userController)

module.exports = route

