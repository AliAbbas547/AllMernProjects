const express= require("express")
const router= express.Router()
const userController= require("../controllers/usercontroller")


router.post("/user",userController.createUser)
router.get("/login",userController.login)
router.put("/update",userController.updateData)
router.delete("/delete",userController.deleteData)




module.exports=router