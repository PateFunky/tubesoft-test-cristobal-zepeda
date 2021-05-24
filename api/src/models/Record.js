require('dotenv').config();

let Sequelize = require('sequelize');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
const S = Sequelize;
let db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/Chronometer`, {
  logging: false,
});


const Record = db.define('records',{
    record:{
        type:S.STRING,
        allowNUll:false
    }
})



module.exports= {Record, db}