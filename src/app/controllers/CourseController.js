const Course= require('../models/Course')
const {mongooseToObject}=require('../../util/mongoose')
const { update } = require('../models/Course')
class CoursesController{
   
    //[GET] /courses/:slug
    show(req,res,next){
        Course.findOne({slug:req.params.slug})
            .then((course)=>{
                res.render('courses/show',{course: mongooseToObject(course)})
            })
            .catch(next)
    }

    //[GET] /courses/create
    create(req,res,next){
        res.render('courses/create')
    }

    //[POST] /courses/store
    store(req,res,next){
        const course=new Course(req.body)
        console.log(req.body.name)
        course.save()
            //.then(()=>res.redirect('/courses/'+req.body.name))
            .then(()=>res.redirect('/me/info/products'))
            .catch(error=>{

            });
    }

    //[GET] courses/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
            .then((course)=>{
                res.render('courses/edit',{course: mongooseToObject(course)})
            })
            .catch(next)
    }

    //[PUT] courses/:id
    update(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=>res.redirect('/me/info/products'))
            .catch(next)
    }
    //[Delete] course/:id
    deleteProduct(req,res,next){
        Course.delete({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /courses/:id/restore
    restore(req,res,next){
        Course.restore({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next);
    }

    //[Delete] course/:id/force
    forceDeleteProduct(req,res,next){
        Course.deleteOne({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next);
    }

}       
    

module.exports=new CoursesController