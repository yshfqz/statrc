const express = require('express')
const router = express.Router()
const User = require('../db/models/userModel')
const mail = require('../utils/mail')

// 用户注册接口
/**
 * @api {post} /user/register 用户注册
 * @apiGroup user
 *
 * @apiParam {String} user 用户账号邮箱
 * @apiParam {String} pass 账号密码
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: -1,
 *    msg: '参数不能为空'
 * }
 */
let cacheCode = {
  // "570062873@qq.com": {codenum: 76877,time: Date.now()},
  // "57005700@qq.com": 5542
}
router.post('/register',(req,res)=>{
    // 接收数据，处理数据，返回数据
    // 使用User数据模型来增删改查
    // res.send('register ok')
     console.log(req.body)
    let {user,pass,code} = req.body
  
    // 空值判断
    if (!user || !pass|| !code) {
      return res.send({err: -1,msg: '参数不能为空'})
    }
    let reg = /\w{6,20}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}/
    if (!reg.test(user)) {
      return res.send({err: -2,msg: '邮箱格式错误'})
    }
  
    // 校验验证码
    if (code != cacheCode[user]) {
      return res.send({err: -4,msg: '验证码错误'})
    }
  
    // 先查询数据库，看是否已有此账号
    User.find({user:user})
    .then((data)=>{
      if (data.length > 0) {
        res.send({err: -2,msg: '用户名已存在'})
        return Promise.reject('break promise')
      } else {
        // 数据库没有此账号，可以注册，插入数据
        return User.insertMany({user,pass})
      }
    })
    .then((data)=>{
      // console.log(data)// undefined
      if (data.length > 0) {
        res.send({err: 0,msg: '注册成功'})
      } else {
        res.send({err: -3,msg: '注册失败'})
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  
  // 用户登录接口
  /**
   * @api {post} /user/login 用户登录
   * @apiGroup user
   *
   * @apiParam {String} user 用户账号
   * @apiParam {String} pass 账号密码
   *
   * @apiSuccessExample 返回数据示例:
   * {
   *    err: -1,
   *    msg: '参数不能为空'
   * }
   */
  router.post('/login',(req,res)=>{
    // 接收数据，处理数据，返回数据
    let {user,pass} = req.body
  
    // 空值判断
    if (!user || !pass) {
      return res.send({err: -1,msg: '参数不能为空'})
    }
  
    // 查询数据库
    User.find({user,pass})
    .then((data)=>{
      if (data.length > 0) {
        res.send({err: 0,msg: '登录成功'})
      } else {
        // 数据库没有此账号
        res.send({err: -1,msg: '账号或密码错误'})
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  // 发送验证码接口
/**
 * @api {post} /user/sendMail 发送邮箱验证码
 * @apiGroup user
 *
 * @apiParam {String} email 用户邮箱
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: -1,
 *    msg: '参数不能为空'
 * }
 */
router.post('/send',(req,res)=>{
  // 接收数据，处理数据，返回数据
  let {user} = req.body

  // 空值判断
  if (!user) {
    return res.send({err: -1,msg: '参数不能为空'})
  }

  // 邮箱格式效验
  let reg = /\w{6,20}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}/
  if (!reg.test(user)) {
    return res.send({err: -2,msg: '邮箱格式错误'})
  }

  // 随机验证码
  let code = parseInt(Math.random()*100000)
  cacheCode[user] = code // 缓存验证码  new Date.getTime()
  // cacheCode[email] = {codenum: code, time: Date.now()} // 缓存验证码
  
  // 发送邮件
  mail.send(user,'验证码','您的验证码是：'+code+'，有效期5分钟。')
  .then(()=>{
    res.send({err: 0,msg: '验证码发送成功'})
  })
  .catch(()=>{
    res.send({err: -1,msg: '验证码发送失败'})
  })
})
router.post('/login1',(req,res)=>{
  // 接收数据，处理数据，返回数据
  let {user,code} = req.body

  // 空值判断
  if (!user || !code) {
    return res.send({err: -1,msg: '参数不能为空'})
  }
  if (code != cacheCode[user]) {
    return res.send({err: -4,msg: '验证码错误'})
  }

  // 查询数据库
  User.find({user})
  .then((data)=>{
    if (data.length > 0) {
      res.send({err: 0,msg: '登录成功'})
    } else {
      // 数据库没有此账号
      res.send({err: -1,msg: '账号不存在'})
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})

  module.exports = router