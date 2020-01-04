const express = require("express");
const router= express.Router();

router.get('/', (req,res)=>{
    res.send("<h1>User Homepage!</h1>");
});

router.get('/signIn', (req,res)=>{
    res.send("<h1>User signIn!</h1>");
});

router.get('/signUp', (req,res)=>{
    res.send("<h1>User signUp!</h1>");
});

module.exports= router;