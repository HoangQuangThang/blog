const Course= require('../models/Course')
var mongoose_delete = require('mongoose-delete');
const {mongooseToObject, mutipleMongooseToObject}=require('../../util/mongoose')
class MeController{
    manage(req,res,next){
        // Course.countDocumentsDeleted()
        //     .then((deletedCount)=>{
        //         console.log(deletedCount)
        //     })
        //     .catch(()=>{})

        Course.find({})
            .then(courses=>res.render('me/info-products',{
                courses:mutipleMongooseToObject(courses)
            }))
            .catch(next)
            
    }
    //[GET] me/trash/products
    trash(req,res,next){
        //Course.collection.find({deleted:true}).pretty()
        Course.findDeleted({})
            .then(
                
                courses=>res.render('me/trash-products',{
                courses:mutipleMongooseToObject(courses)
            }))
            .catch(next)
        

    }

}
module.exports=new MeController