const express= require('express');
const app = express();
const bodyParser= require('body-parser');
const mainRoute= require('./routes/index');
const port=  process.env.PORT||"1234" ; 

app.use(express.static('views'));

app.use('/mainPage',mainRoute);



app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})