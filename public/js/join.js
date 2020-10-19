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

