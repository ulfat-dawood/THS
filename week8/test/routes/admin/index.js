const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("<h1>Hello Admin Home Page</h1>");
});
router.get("/signin", (req,res)=>{
    res.send("<h1>Hello Admin SignIN Page</h1>");
});
router.get("/signup", (req,res)=>{
    res.send("<h1>Hello Admin SignUP Page</h1>");
});


module.exports = router;