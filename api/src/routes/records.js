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
        res.send('OK')
    } catch(err){
        console.log(err)
    } 
       }
    

})


module.exports = router;