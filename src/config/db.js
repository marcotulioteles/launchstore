const { Pool } = require("pg")

module.exports = new Pool({
  user: 'marcotulio',
  password: '191619',
  host: 'localhost',
  port: 5432,
  database: 'launchstoredb'
})