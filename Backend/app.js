const express = require("express");
const router = require("./routes/book-routes");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const cors =require("cors");
//middleware
app.use(express.json());
app.use(cors());

app.use("/books",router); //localhost:5000/books
const { default: mongoose } = require("mongoose");
mongoose.connect("mongodb+srv://admin:xpyUGwvL8Bc784oQ@cluster0.nc9nr.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("connected to the database"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err));


//mongodb+srv://admin:<password>@cluster0.nttg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//KXidbng0Kg3IqWrB