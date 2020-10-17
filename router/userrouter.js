const express = require('express')
const router = express.Router()
const User = require('../db/models/userModel')
// 用户注册接口
/**
 * @api {post} /user/register 用户注册
 * @apiGroup user
 *
 * @apiParam {String} user 用户账号
 * @apiParam {String} pass 账号密码
 * @apiParam {String} email 用户邮箱
 * @apiParam {String} code 邮箱验证码
 *
 * @apiSuccessExample 返回数据示例:
 * {
 *    err: -1,
 *    msg: '参数不能为空'
 * }
 */
router.post('/register',(req,res)=>{
    // 接收数据，处理数据，返回数据
    // 使用User数据模型来增删改查
    // res.send('register ok')
    // console.log(req.body)
    let {user,pass,email,code} = req.body
  
    // 空值判断
    if (!user || !pass || !email || !code) {
      return res.send({err: -1,msg: '参数不能为空'})
    }
  
    // 校验验证码
    if (code != cacheCode[email]) {
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
        return User.insertMany({user,pass,email})
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
  module.exports = router