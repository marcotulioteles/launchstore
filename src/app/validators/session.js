const User = require('../models/user')
const { compare } = require('bcryptjs')

module.exports = {
  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: {email} })

    if (!user) return res.render("session/login", {
      error: "Usuário não cadastrado!",
      user: req.body
    })

    const passed = await compare(password, user.password)

    if (!passed) return res.render("session/login", { 
      user: req.body,
      error: "Senha incorreta!"
     })
    
    req.user = user

    next ()
  },

  async forgot(req, res, next) {
    const { email } = req.body

    try {
      let user = await User.findOne({where: { email }})

      if (!user) return res.render("session/forgot-password", {
        error: "E-mail não cadastrado!",
        user: req.body
      })

      req.user = user

      next ()
    
    } catch {
      console.error(err)
    }
  },

  async reset(req, res, next) {
    // search for the user
    const { email, password, token, passwordRepeat } = req.body
    const user = await User.findOne({ where: {email} })

    if (!user) return res.render("session/password-reset", {
      user: req.body,
      token,
      error: "Usuário não cadastrado!"
    })

    //verify if password matches
    if (password != passwordRepeat) return res.render("session/password-reset", {
      user: req.body,
      token,
      error: 'As duas senhas devem ser iguais!'
    }) 
    
    //verify if token matches
    if (token != user.reset_token) return res.render('session/password-reset', {
      user: req.body,
      token,
      error: 'Token inválido! Solicite uma nova recuperação de senha.'
    })

    //verify if token has not expired
    let now = new Date()
    now = now.setHours(now.getHours())

    if (now > user.reset_token_expires) return res.render('session/password-reset', {
      user: req.body,
      token,
      error: 'Token expirado! Por favor, solicite uma nova recuperação de senha.'
    })

    req.user = user

    next ()
  }
}
