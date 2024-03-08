const express=require("express");
const app=express();

PORT=4000

//db Connection
const{dbConnect}=require("./config/DbConnection");
dbConnect();

app.listen(PORT,()=>{
     console.log("Your server is Up and Running")
})