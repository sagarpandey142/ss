const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },

    lastName:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        trim:true,

    },

    password:{
        type:String,
        required:true,
    },

    accountType:{
        type:String,
        enum:["Student","Admin","Instructor"],
        required:true,
    },

    active: {
        type: Boolean,
        default: true,
    },
    approved: {
        type: Boolean,
        default: true,
    },

    additionalDetail:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Profile',
    },

    images:{
        type:String,
        required:true,
    },
       
    token:{
        type:String,
    },
    
    resetPasswordExpires:{
        type:Date,
    },

        
    
},
{timestamps:true}
)

module.exports = mongoose.model("User", UserSchema);