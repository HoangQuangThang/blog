const Course=require('../models/Course')
const {mutipleMongooseToObject}=require('../../util/mongoose')
class SiteController{
    //[GET] /
    index(req,res,next){
        //sử dụng callback để lấy document từ db
        // Course.find({}, function(err,courses){
        //     if(!err){
        //         res.json(courses);
        //         return
        //     } 
        //     next(err)
        //     //res.status(400).json({error:'errorr'})

        // })

        //Sử dụng promise để lấy document từ db
        //xem hinhf C:\Users\DELL\Pictures\Screenshots11
        Course.find({})
            .then(courses=> {
                res.render('home',{
                    courses:mutipleMongooseToObject(courses)
                })
            })
            .catch(next)// Xem kỹ read fromdata
        //res.render('home');
    }

    //[GET] /search
    search(req,res){
        res.render('search')
    }
}
module.exports=new SiteController