const express=require("express");
const router=express.Router();

const {login} =require("../component/Auth")

router.post("/login",login);