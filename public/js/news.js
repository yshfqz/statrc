

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
//news 分页获取
// 获取分页数据
function getPageData(page){
	let url = 'http://localhost:3000/news/find'
	$.post(url,{page},function (data){
		// 根据数据渲染表格
        renderTable(data.info.list)
        

	})
}

// 进入页面获取第一页数据，每页4条
getPageData(1)
var num = 1;
$('.news-more').click(()=>{
    num++
    getPageData(num)
    //console.log(13)
})
function renderTable(data){
	let domStr = ''
	data.forEach(function (item,index){
		domStr += `
		<li>
            <div class="news-dd">
                <div class="img">
                    <div class="pic" style="${item.add}"></div>
                    </div>
                    <div class="word">
                    <div class="h3">${item.h2}</div>
                    <div class="time">${item.time}</div>
                </div>
            </div>
        </li>
		`
    })
    let liu = $('.news-body ul').html() +domStr
	$('.news-body ul').html(liu)
}