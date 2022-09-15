const express=require('express')
const router=express.Router()

const courseController=require('../app/controllers/CourseController')

//can than thu tu truoc sau, duong dan khop voi cai naof thif se render ra view do
router.post('/store',courseController.store)
router.get('/create',courseController.create)
router.get('/:id/edit',courseController.edit) 
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id',courseController.deleteProduct)
router.delete('/:id/force',courseController.forceDeleteProduct)
router.get('/:slug',courseController.show)

module.exports=router