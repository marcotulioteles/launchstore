const express = require('express')
const routes = express.Router()
const productControler = require('./app/controllers/productControler')

routes.get('/', function(req, res){
  return res.render('layout.njk')
})

routes.get('/products/create', productControler.create)
routes.post('/products', productControler.post)

// Alias
routes.get('/ads/create', function(req, res){
  return res.redirect('/products/create')
})

module.exports = routes