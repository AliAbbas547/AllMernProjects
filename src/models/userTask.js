//______________________ Import or Require Modules ________________________________

const mongoose = require("mongoose");

//____________________________ Creating Schema _____________________________________

const toDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim : true
    },
    task: {
      type: String,
      required: true,
      trim:true
    
    },
    Date: {
      type: String,
      required: true,   
      trim : true
    }


  
  } , { timestamps: true }
);
//______________________ Export the Modules ________________________________

module.exports = new mongoose.model("ToDo", toDoSchema);