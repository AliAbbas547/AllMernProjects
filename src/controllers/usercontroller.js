
const userModel = require("../models/signUp")
const taskModel=require("../models/userTask")
const jwt = require("jsonwebtoken")

const createUser = async function (req, res) {
  try {
    const data = req.body;
    if (Object.keys(data).length == 0) {
        return res
          .status(400)
          .send({ status: false, message: "No input provided" });
      }
    console.log(data)
    let createData= await userModel.create(data)
    
    return res.status(201).send({ status: true, data: createData });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

const createTask= async function(req,res){
 try{
    let data= req.body
    if (Object.keys(data).length == 0) {
        return res
          .status(400)
          .send({ status: false, message: "No input provided" });
      }
    
    let createTask= await taskModel.create(data)
    return res.status(201).send({status:true,data:createTask})

 }
 catch(err){
    return res.status(500).send({status:false,message:err.message})
 }
}

const login = async function (req, res) {
    try {
      let data = req.body
      const {email,password}= data
      let check = await userModel.findOne({ email:email});
      if (check == null) {
        return res
          .status(404)
          .send({ status: false, message: "user is not registered" });
      }
      let userId= check["_id"]
      let token = jwt.sign(
        { userId: check["_id"].toString(), creator: "Ali and Pratham" },
        "to-do-List",
        { expiresIn: "12h" }
      );
      return res.status(201).send({ status: true, data:token,userId:userId });
    } catch (err) {
      res.status(500).send({ status: false, message: err.message });
    }
  };
  





const getData = async function (req, res) {
  try {
    let filter = req.query;

    let data = await userModel.find(filter);
    if(data.length==0){
        return res.status(404).send({status:false,message:"query is not correct"})
    }
    res.status(200).send({ status: true, data: data });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};



const updateData = async function (req, res) {
  try {
    let data = req.body;
    const { userId, ...data2 } = data;
    
    let data1 = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: data2 },
      { new: true }
    );
    return res
      .status(200)
      .send({ status: true, message: "updated successfully", data: data1 });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};



const deleteData = async function (req, res) {
  try {
    let data1 = req.query.userId;
    let data = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleteted: true, deletedAt: Date.now() } }
    );
    return res.status(200).send({status:"deleted successfully"})
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = {
  createUser,
  login,
  getData,
  updateData,
  deleteData,
};



