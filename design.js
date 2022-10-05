/*
 actionbar type:a/b/c;
*/
const actionbar=document.querySelector("actionbar");
var dir =0;
const toggle = document.querySelector("toggle");
var touch =0;
const view =document.querySelector("view");
const other =document.querySelector("other");
const layout =document.querySelector("layout");
const nav =document.getElementsByTagName("nav");
const menu =document.querySelector("menu");
let name=document.querySelector("name");
 if (actionbar.textContent=="actionbar"){
     actionbar.classList.add("actionbar");
     actionbar.innerHTML="<bars onclick='callMenu()'><bar></bar></bars><name>Note</name><search></search>";
     menu.ontouchmove=function(ev){
        var x =ev.touches[0].clientX;
        menu.style.left=touch;
        return touch = Math.floor(x);
        this.style.transitionDuration="0s";
     }
     menu.ontouchend=function(){
        if(touch >310){
            this.style.left ="100%";
            this.style.transitionDuration="1s";
        setTimeout(function() {
            menu.style.transitionDuration="0s";
            layout.style.filter ="brightness(1)";
           return touch =0;
        },1000);
        }else{
            this.style.left="23.6%";
            this.style.transitionDuration="1s"
        }
     }
     for (var i = 0; i <nav.length; i++) {
        nav[i].onmouseover = function(){
          this.before.style.display="block"
        }
     }
 }
  function callMenu(){
      menu.style.left="23.6%";
      menu.style.transitionDuration=".5s";
     layout.style.filter ="brightness(0.5)";
  }
  function drawback(){
      menu.style.left="100%";
      layout.style.filter="brightness(1)";
      other.style.top="0px";
  }
  function joinwithus(){
      drawback();
      setTimeout(function(){
         let data ="data/JoinWithUs.txt";
         fetch(data).then(x=>x.text()).then(f=>view.innerHTML=f);
     },100);
  }
 let joinUs = toggle.onclick =function(){
     other.style.top="100%";
 }
 function openMail(){
     open("oxifo197@gmail.com");
 }