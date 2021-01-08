const { formatPrice, date } = require('../../lib/utils');
const Product = require('../models/product')
<<<<<<< HEAD
=======
const File = require('../models/file')
>>>>>>> a55b90d16e27559400a5f0499b86a0447eb1fc55

module.exports = {
  async index(req, res) {
    try {
<<<<<<< HEAD
      let results
=======
      let results,
>>>>>>> a55b90d16e27559400a5f0499b86a0447eb1fc55
        params = {}

      const { filter, category } = req.query

      if (!filter) return res.redirect("/")

      params.filter = filter

      if (category) {
        params.category = category
      }

      results = await Product.search(params)

      async function getImage(productId) {
        let results = await Product.files(productId)
        const files = results.rows.map(file => `${req.protocol}://${req.headers.host}${file.path.replace("public","")}`)
<<<<<<< HEAD
  
        return files[0]
      }      

      const productPromise = results.rows.map(async product => {
=======
        
        return files[0]
      }

      const productsPromise = results.rows.map(async product => {
>>>>>>> a55b90d16e27559400a5f0499b86a0447eb1fc55
        product.img = await getImage(product.id)
        product.oldPrice = formatPrice(product.old_price)
        product.price = formatPrice(product.price)
        return product
      })

<<<<<<< HEAD
      const products = await Promise.all(productPromise)
     
      const search = {
        term: req.query.filter,
        total: products.length
=======
      const products = await Promise.all(productsPromise)

      const search = {
        term: req.query.filter,
        total: products.length 
>>>>>>> a55b90d16e27559400a5f0499b86a0447eb1fc55
      }

      const categories = products.map(product => ({
        id: product.category_id,
        name: product.category_name
      })).reduce((categoriesFiltered, category) => {
        
        const found = categoriesFiltered.some(cat => cat.id == category.id)
        
        if (!found) categoriesFiltered.push(category)

        return categoriesFiltered
      }, [])

      return res.render("search/index", { products, search, categories })
<<<<<<< HEAD
  
    }
    catch (err) {
      console.error(err)
    }

=======
    }
    catch(err) {

    }
>>>>>>> a55b90d16e27559400a5f0499b86a0447eb1fc55
  }
}