var slideshow = document.querySelector('#slideshow')
var olLis = document.querySelectorAll('ol li');
var room = document.querySelector('#room');
var now =0;
var timer;
 for(var i = 0;i<olLis.length;i++){
     olLis[i].index=i;
     olLis[i].onclick = function(){
         console.log(123);
         for(var i=0; i<olLis.length;i++){
             olLis[i].className='';

         }
         this.className = 'active';
         room.style.left = - 1320 * this.index + 'px' ;
         now = this.index
     }
 }

 slideshow.onmouseover = function(){
     clearInterval(timer);
 }
 slideshow.onmouseout = function(){
     timer = setInterval(run,3000)
 }
 timer = setInterval(run,3000)

 function run (){
     if(now ==olLis.length-1){
         now=0
     }
     else{
         now++;
     }
     for(var i=0;i<olLis.length;i++){
         olLis[i].className='';
     }
     olLis[now].className='active';
     room.style.left= -1320*now +'px';
 }