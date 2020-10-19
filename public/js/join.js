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
$('.button-base').click(()=>{
    //console.log(123)
    $('#login-in').hide()
    $('#login-in1').show()
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
        alert(data.msg)
        localStorage.setItem('login','loginSuccess')
        localStorage.setItem('user',$('#user').val())
        //location.href = './index.html'
      } else {
        alert(data.msg)
      }
    })
  })
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

