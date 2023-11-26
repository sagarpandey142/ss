const express=require("express")
const app=express();

let Port=4000;


const database=require("./config/database");
database.connect();

app.get("/",(req,res)=>{
    return res.json({
		success:true,
		message:'Your server is up and running....'
	});
})

app.listen(Port,()=>{
    console.log(`your port is running on this ${Port}`)
})
