//npm install node-sass
// compile scss->css :sass ./src/resources/scss/app.scss ./src/public/css/app.css --watch
//npm i morgan --save-dev
//npm install mongoose-slug-generator --save (trong video create new course) giups taọ thêm một khóa phụ khi trùng khóa chính
//http logger
const morgan = require('morgan')
//sử dụng middleware này để thay thế cho method put khi submit form
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 8080
const db=require('./config/db')
const route = require('./routes')

//connnect mongodb
db.connect();

app.use(express.static(path.join(__dirname, 'public')))

//xử lý post dữ liệu
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(methodOverride('_method'))
//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b)=>a+b,
}
}))
app.set('view engine', 'hbs')
// do so do folder khac so voi thu vien nen phai dat duong dan
app.set('views', path.join(__dirname, 'resources','views'))

//khoi taoj route
route(app);
//app.use(morgan('combined'))
// app.get('/home', (req, res) => {
//   res.render('home')

// })
// // app.get('/new', (req, res) => {
// //   res.render('new')
// // })
// app.get('/search', (req, res) => {
//   //lay query parameters
//   //console.log(req.query.q)
//   res.render('search')

// })
// app.post('/search', (req, res) => {
//   //để lấy dữ liệu từ query parameter(phương thức get)=>req.quyery 
//   //để lấy dữ liệu từ form =>req.body
//   console.log(req.body)
//   res.send('new')
// })
// console.log(__dirname)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
