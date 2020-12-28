const { create } = require("browser-sync");
const category = require('../models/category')
const product = require('../models/product')

module.exports = {
  create(req, res) {
    category.all()
    .then(function(results) {
      const categories = results.rows
      return res.render("products/create.njk", {categories})
    }).catch(function(err) {
      throw new Error(err)
    })
  },

  async post(req, res) {
    // lógica de salvar
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fullfill all fields!")
      }
    }
    
    let results = await product.create(req.body)
    const productId = results.rows[0].id

    results = await category.all()
    const categories = results.rows

    return res.render("products/create.njk", {productId, categories})
  }
}