const db = require('../../config/db')
const Base = require('./base')

Base.init({ table: 'categories' })

module.exports = {
  ...Base,
}