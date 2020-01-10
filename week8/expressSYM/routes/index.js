const express= require('express');
const router= express.Router(); 
const app= express();



router.post('/', (req,res)=>{
    res.redirect('/final')
}); 

module.exports= router; 