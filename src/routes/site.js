const express=require('express')
const router=express.Router()

const siteController=require('../app/controllers/SiteController')

//can than thu tu truoc sau, duong dan khop voi cai naof thif se render ra view do
router.get('/search',siteController.search)
router.get('/',siteController.index)

module.exports=router