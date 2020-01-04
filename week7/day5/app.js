const express = require("express");
const config = require("config");
const app = express();

const port = process.env.PORT || config.get("PORT");

app.use(express.static("views"));


//User Routes
const userRoutes = require("./routes/users");
app.use("/user", userRoutes);

//Admin Routes
const adminRoutes = require("./routes/admin");
app.use("/admin",adminRoutes);




app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
}); 