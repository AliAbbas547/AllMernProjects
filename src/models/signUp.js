//______________________ Import or Require Modules ________________________________

const mongoose = require("mongoose");

//____________________________ Creating Schema _____________________________________

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim : true
    },
    lname: {
      type: String,
      required: true,
      trim:true
    
    },
    email: {
      type: String,
      required: true,   
      trim : true
    },
    password:{
      type:String,
      required:true,
      trim:true
    },
    mobileNo:{
     type:Number,
     required:true,
     trim:true
    },
    deletedAt:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
    

  } , { timestamps: true }
);
//______________________ Export the Modules ________________________________

module.exports = new mongoose.model("UserData", userSchema);