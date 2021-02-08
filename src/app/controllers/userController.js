const { unlinkSync } = require('fs')
const { hash } = require('bcryptjs')

const User = require('../models/user')
const Product = require('../models/product')


const { formatCep, formatCpfCnpj } = require('../../lib/utils')

module.exports = {
  registerForm(req, res) {
    return res.render("user/register")
  },

  async show(req, res) {
    try {
      const { user } = req
      user.cpf_cnpj = formatCpfCnpj(user.cpf_cnpj)
      user.cep = formatCep(user.cep)

      return res.render('user/index', { user })

    } catch (err) {
      console.error(err)
    }
  },

  async post(req, res) {
    try {
      let { name, email, password, cpf_cnpj, cep, address } = req.body

      password = await hash(password, 8)
      cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
      cep = cep.replace(/\D/g, "")

      const userId = await User.create({
        name,
        email,
        password,
        cpf_cnpj,
        cep,
        address
      })

      req.session.userId = userId

      return res.redirect('/users')

    } catch (err) {
      console.error(err)
    }

  },

  async update(req, res) {
    try {
      const { user } = req
      let { name, email, cpf_cnpj, cep, address } = req.body

      cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
      cep = cep.replace(/\D/g, "")

      await User.update(user.id, {
        name,
        email,
        cpf_cnpj,
        cep,
        address
      })

      return res.render("user/index", {
        user: req.body,
        success: "Conta atualizada com sucesso"
      })

    } catch {
      console.error(err)
      return res.render("user/index", {
        error: "Ocorreu algum erro"
      })
    }
  },

  async delete(req, res) {
    try {
      const products = await Product.findAll({ where: { user_id: req.body.id } })

      // after get all products, get all images
      const allFilesPromise = products.map(product =>
        Product.files(product.id))

      let promiseResults = await Promise.all(allFilesPromise)

      // run the user remove
      await User.delete(req.body.id)
      req.session.destroy()

      // remove the images from the app (pasta public)
      promiseResults.map(files => {
        files.map(file => {
          try {
            unlinkSync(file.path)
          } catch (err) {
            console.error(err)
          }
        })
      })

      return res.render("session/login", {
        success: "Conta deletada com sucesso!"
      })
    } catch (err) {
      console.error(err)
      return res.render("user/index", {
        user: req.body,
        error: "Erro ao tentar deletar sua conta!"
      })
    }
  }
}