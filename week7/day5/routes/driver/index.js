const express = require("express");
const router= express.Router();

router.get('/', (req,res)=>{
    res.send("<h1>Driver Homepage!</h1>");
});

router.get('/signIn', (req,res)=>{
    res.send("<h1>Diver signIn!</h1>");
});

router.get('/signUp', (req,res)=>{
    res.send("<h1>Driver signUp!</h1>");
});

module.exports= router;