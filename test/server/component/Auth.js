exports.login=async(req,res)=>{
    try{
        //email and password fetch
        const {email,password}=req.body;
       
        //validation
        if(!email || !password){
          return  res.status(401).json({
                success:false,
                message:"All Field Are Required Please Fill All The Detail",
            })
        }

        //db check if user exit or not
        const user=await User.findOne({email}).populate("additionalDetail");

        if(!user){
           return res.status(401).json({
                success:false,
                message:"Sign Up First",
            })}
            //jwt token
        if(await bcrypt.compare(password,user.password)){
            const payload={
                email:user.email,
                accountType:user.accountType,
                id:user._id,
            }

            let token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"24h",
            });
            user.token=token;
            user.password=undefined;
            const option={
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,option).status(200).json({
                success:true,
                 token,
                 user,
                 message:"Log In SuccessFully",
            })
        }
        else{
                 res.status(500).json({
                    success:false,
                    message:"password Doesnt Matches",
                 })
        }

    } catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:'Login Failure, please try again',
        });
    }
}