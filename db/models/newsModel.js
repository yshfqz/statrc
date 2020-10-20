const mongoose = require('mongoose')

// 创建一个与数据集合(表)相关的schema对象
let userSchema = new mongoose.Schema({
  add: {type:String,required:true},
  h2: {type:String,required:true},
  time: {type:String,required:true},

})

// 把schema对象转换成与数据集合相关的数据模型
// mongoose.model('集合名/表名',schema对象)
let News = mongoose.model('news',userSchema)
// 使用 User 数据模型来进行增删改查

module.exports = News
