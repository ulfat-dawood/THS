const express = require("express");
const router= express.Router();

router.get('/', (req,res)=>{
    res.send("<h1>Admin Homepage!</h1>");
});

router.get('/signIn', (req,res)=>{
    res.send("<h1>Admin signIn!</h1>");
});

router.get('/signUp', (req,res)=>{
    res.send("<h1>Admin signUp!</h1>");
});

module.exports= router;