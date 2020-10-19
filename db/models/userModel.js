const mongoose = require('mongoose')

// 创建一个与数据集合(表)相关的schema对象
let userSchema = new mongoose.Schema({
  user: {type:String,required:true},
  pass: {type:String,required:true},
})

// 把schema对象转换成与数据集合相关的数据模型
// mongoose.model('集合名/表名',schema对象)
let User = mongoose.model('users',userSchema)
// 使用 User 数据模型来进行增删改查

module.exports = User

