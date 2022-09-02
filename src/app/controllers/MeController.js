const Course= require('../models/Course')
const {mongooseToObject, mutipleMongooseToObject}=require('../../util/mongoose')
class MeController{
    manage(req,res,next){
        Course.find({})
            .then(courses=>res.render('me/info-products',{
                courses:mutipleMongooseToObject(courses)
            }))
            .catch(next)
            
    }
}
module.exports=new MeController