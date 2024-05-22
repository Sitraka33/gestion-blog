const {Sequelize} = require('sequelize')
const config = require('./config.js')

var sequelize = new Sequelize(config.database,config.username,config.password,{
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true 
      }
    }
})

module.exports = sequelize;