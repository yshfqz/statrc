const express = require('express')
const router = express.Router()
const News = require('../db/models/newsModel')
  
  router.post('/tianjia',(req,res)=>{
    // 接收数据，处理数据，返回数据
    let {add,h2,time} = req.body
  
    // 空值判断
    if (!add || !h2|| !time) {
      return res.send({err: -1,msg: '参数不能为空'})
    }
  
    News.insertMany({add,h2,time})
    .then((data)=>{
      // console.log(data)// undefined
      News.find().then((data)=>{
          console.log(data)
      })
      if (data.length > 0) {
        res.send({err: 0,msg: '添加成功'})
      } else {
        res.send({err: -3,msg: '添加失败'})
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  //查询news
  router.post('/find',(req,res)=>{
      console.log(123)
    // let {size,page} = req.body
    let page = req.body.page || 1 // 第几页
    //let count = 0 // 数据总条数
    //let pages = 0 // 数据总页数
    // 查询所有数据
    News.find()
    .then((data)=>{
      //count = data.length // 数据总条数
      //pages = Math.ceil(count/size) // 数据总页数
      // limit(3) 查询3条数据
      // skip(3) 从索引为3的位置开始查询
      // 1    0
      // 2    3
      // 3    6
      return News.find().limit(Number(9)).skip(Number((page-1)*9))
    })
    .then((data)=>{
      res.send({err:0,msg:'查询成功',info:{list:data}})
    })
    .catch(()=>{
      res.send({err:-2,msg:'查询失败'})
    })
  })
module.exports = router