const Sequelize = require('sequelize');



module.exports = new Sequelize("Wealth-app","akash","cosmichalo1",{
    host:"localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging:true     //log is being printed any query which is being performed
});