class NewsController{
    //[GET] /new
    index(req,res){
        res.render('new');
    }

    show(req,res){
        res.send('detail new')
    }
}
module.exports=new NewsController