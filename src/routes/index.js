const newsRouter=require('./news')
const siteRouter=require('./site')
const coursesRouter=require('./courses')
const meRouter=require('./me')
function route(app){
    app.use('/news',newsRouter)
    app.use('/courses',coursesRouter)
    app.use('/me', meRouter)
    app.use('/',siteRouter)
    // app.get('/home', (req, res) => {
    //     res.render('home')
        
    //   })
      // app.get('/new', (req, res) => {
      //   res.render('new')
      // })

      // app.get('/search', (req, res) => {
      //   //lay query parameters
      //   //console.log(req.query.q)
      //   res.render('search')
        
      // })
      app.post('/search', (req, res) => {
        //để lấy dữ liệu từ query parameter(phương thức get)=>req.quyery 
        //để lấy dữ liệu từ form =>req.body
        console.log(req.body)
        res.send('new')
      })
      console.log(__dirname)
}

module.exports=route;