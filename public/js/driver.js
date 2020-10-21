

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
//车型切换
//console.log($('select').val())
var $imgs = $('.driver-imgs img')
$('select').change(function(){
    
    
    switch($(this).val()){
        case 'H5':
            //console.log($('driver-imgs img'))
            $imgs.eq(0).css('display','block')
            $imgs.eq(0).siblings().css('display','none')
            
         break;
        case 'H7':
            $imgs.eq(1).css('display','block')
            $imgs.eq(1).siblings().css('display','none')
         break;
        case 'H9':
            $imgs.eq(2).css('display','block')
            $imgs.eq(2).siblings().css('display','none')
         break;
        case 'E-HS3':
            $imgs.eq(3).css('display','block')
            $imgs.eq(3).siblings().css('display','none')
         break;
        case 'HS5':
            $imgs.eq(4).css('display','block')
            $imgs.eq(4).siblings().css('display','none')
         break;
        case 'HS7':
            $imgs.eq(5).css('display','block')
            $imgs.eq(5).siblings().css('display','none')
         break;
         
       }
})
