const express=require('express')
const router=express.Router()

const meController=require('../app/controllers/MeController')

//can than thu tu truoc sau, duong dan khop voi cai naof thif se render ra view do
router.get('/info/products',meController.manage)


module.exports=router