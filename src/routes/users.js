const express = require('express')
const routes = express.Router()

const sessionController = require('../app/controllers/sessionController')
const userController = require('../app/controllers/userController')

// // login/logout
// routes.get('/login', sessionController.loginForm)
// routes.post('/login', sessionController.login)
// routes.post('/logout', sessionController.logout)

// // reset password / forgot
// routes.get('/forgot-password', sessionController.forgotForm)
// routes.get('/password-reset', sessionController.resetForm)
// routes.post('/forgot-password', sessionController.forgot)
// routes.post('/password-reset', sessionController.reset)

// // user register userController
routes.get('/register', userController.registerForm)
// routes.post('/register', userController.post)

// routes.post('/', userController.show)
// routes.put('/', userController.update)
// routes.delete('/', userController.delete)

module.exports = routes