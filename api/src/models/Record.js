let Sequelize = require('sequelize');
const S = Sequelize;
let db = new Sequelize('postgres://postgres:total90@localhost:5432/Chronometer', {
  logging: false,
});


const Record = db.define('records',{
    record:{
        type:S.STRING,
        allowNUll:false
    }
})



module.exports= {Record, db}