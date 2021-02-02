const express=require("express")
const router=express.Router()
const {getUser,addUser,editUser,deleteUser,userLogin,orderAdd} =require("../controllers/user-controller")
const { tokenValidation} = require("./tokenValidation")


router.get("/users/",tokenValidation,getUser )
router.post("/users/",addUser )
// router.put("/users/:id",editUser )
// router.put("/users/orderAdd/:id",orderAdd )
// router.delete("/users/:id",deleteUser )
router.post("/login/",userLogin )

module.exports=router
