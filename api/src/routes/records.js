const { Router } = require('express');
const {Record} = require('../models/Record');


const router = Router();

router.post('/',async (req,res)=>{
    const { records } = req.body
    if(!records){
        res.json({
            error: 'record required'
        })
    }else if (records){
       try {
           let newRecord =  await Record.create({
            record:records
        })
        res.send(newRecord)
    } catch(err){
        console.log(err)
    } 
       }
})

router.get('/', async (req,res)=>{
    const allRecords= await Record.findAll()
    res.send(allRecords)
})


module.exports = router;