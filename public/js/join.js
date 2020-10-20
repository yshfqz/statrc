//导航栏 js
var next1 = $('.next')
var next2 = $('.next1')
var ght =100;
next1.on("click",function(){
    $('.nav').show()
    $('.logo').hide()
    $('.zhegai').height(100)

})
next2.on("click",function(){
    $('.nav').hide()
    $('.logo').show()
    $('.zhegai').height(0)
})
$(".nav li").eq(4).on("mouseover",()=>{
    $(".nav li .more").show()
    $(".nav li span").html(" ↑")
})
$(".nav li").eq(6).on("mouseover",()=>{
    $(".nav li .more1").show()
    $(".nav li span").html(" ↑")
})
$(".nav li").eq(4).on("mouseout",()=>{
    $(".nav li .more").hide()
    $(".nav li span").html(" ↓")
})
$(".nav li").eq(6).on("mouseout",()=>{
    $(".nav li .more1").hide()
    $(".nav li span").html(" ↓")
})
// $(".nav ul li a").on("mouseover",()=>{
//     // console.log($(this))
//     $(this).addClass('one')
// })
$('.nav ul li a').mouseover(function () {
    $(this).addClass('one')
    $(this).siblings().removeClass('one')
})
$('.nav ul li a').mouseout(function () {
    $(this).removeClass('one')
})
$(window).scroll(function(){
  console.log($(window).scrollTop()) 
  var high = $(window).scrollTop()
  if(high==0){
      $('#head').css('background-color','#fff')
      $('.logo').show()
  }else{
      $('#head').css("background-color","")
      $('.logo').hide()
  }

})
//登录界面切换
$('.button-base').click(()=>{
    //console.log(123)
    $('#login-in').hide()
    $('#login-in1').show()
    $('#login-in2').hide()
})
$('.yanzhengma').click(()=>{
  $('#login-in1').hide()
  $('#login-in2').show()
})

//注册验证
$('.button-primary').click(function (){
    let url = 'http://localhost:3000/user/register'
    let data = {
      user: $('.user').val(),
      pass: $('.pass').val(),
      code:$('.code').val()
    }
    $.post(url,data,function (data){
      if (data.err == 0) {
        $('.join').text("欢迎车主")
        alert(data.msg)
        localStorage.setItem('login','loginSuccess')
        localStorage.setItem('user',$('#user').val())
        //location.href = './index.html'
      } else {
        alert(data.msg)
      }
    })
  })
  //发送验证码
  $('.email').click(function (){
      $(this).text("已发送")
    let url = 'http://localhost:3000/user/send'
    let data = {
      user: $('.user').val()
    }
    $.post(url,data,function (data){
      if (data.err == 0) {
        alert(data.msg)
        //location.href = './index.html'
      } else {
        alert(data.msg)
      }
    })
  })
  //deng lu
  $('.button-primary1').click(function (){
    console.log(123)
    if($('.xieyi').prop('checked')){
      let url = 'http://localhost:3000/user/login'
      let data = {
        user: $('.user1').val(),
        pass: $('.pass1').val(),
      }
    $.post(url,data,function (data){
      if (data.err == 0) {
        alert(data.msg)
        $('.join').text("欢迎车主")
        localStorage.setItem('login','loginSuccess')
        localStorage.setItem('user',$('#user1').val())
        location.href = './index.html'
        //location.href = './index.html'
      } else {
        alert(data.msg)
      }
    })
    }else{
      alert("请阅读勾选用户协议")
    }
    
  })
  //验证码登录
  $('.email1').click(function (){
    $(this).text("已发送")
  let url = 'http://localhost:3000/user/send'
  let data = {
    user: $('.user1').val()
  }
  $.post(url,data,function (data){
    if (data.err == 0) {
      alert(data.msg)
      //location.href = './index.html'
    } else {
      alert(data.msg)
    }
  })
  })
  $('.button-primary2').click(function (){
      let url = 'http://localhost:3000/user/login1'
      let data = {
        user: $('.user2').val(),
        code: $('.code2').val(),
      }
    $.post(url,data,function (data){
      if (data.err == 0) {
        alert(data.msg)
        $('.join').text("欢迎车主")
        localStorage.setItem('login','loginSuccess')
        localStorage.setItem('user',$('#user2').val())
        location.href = './index.html'
        //location.href = './index.html'
      } else {
        alert(data.msg)
      }
    })
    
  })

