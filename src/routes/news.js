const express=require('express')
const router=express.Router()

const newsController=require('../app/controllers/NewController')

//can than thu tu truoc sau, duong dan khop voi cai naof thif se render ra view do
router.get('/:slug',newsController.show)
router.get('/',newsController.index)

module.exports=router