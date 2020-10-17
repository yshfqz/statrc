// 项目入口文件
const express = require('express')
const db = require('./db/connect')
const userRouter = require('./router/userrouter')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// 设置静态目录
app.use('/static',express.static(path.join(__dirname,'./public')))

//app.use('/',bodyParser.json()) //解析json数据
//app.use('/',bodyParser.urlencoded({extened: false})) // 解析表单数据
app.use('/user',userRouter)

app.listen(3000,()=>{
  console.log('-----------server start------------')
})
