/*
 actionbar type:a/b/c;
*/
let n = null;
var np =0;
const footer = "<footer onclick='Next()'></footer>";
const actionbar = document.querySelector("actionbar");
let list =[];
let p = 0;
var dir = 0;
const rdn = Math.floor(Math.random()*data.length);
const add =document.querySelector("right");
const toggle = document.querySelector("toggle");
var new_ = document.querySelector("new");
var touch = 0;
const view = document.querySelector("view");
const other = document.querySelector("other");
const layout = document.querySelector("layout");
const lasted = localStorage.getItem("lasted");
const nav = document.getElementsByTagName("nav");
const content = document.querySelector("content");
const button="<left onclick='minus()'></left><right onclick='plus()'></right>";
const http = "http://localhost:26543/storage/emulated/0/note/index.html";
const menu = document.querySelector("menu");
let name = document.querySelector("name");
if (actionbar.textContent == "actionbar") {
    actionbar.classList.add("actionbar");
    actionbar.innerHTML = "<bars onclick='callMenu()'><bar></bar></bars><name>Note</name><search></search>";
    menu.ontouchmove = function(ev) {
        var x = ev.touches[0].clientX;
        menu.style.left = touch;
        return touch = Math.floor(x);
        this.style.transitionDuration = "0s";
    }
    menu.ontouchend = function() {
        if (touch > 310) {
            this.style.left = "100%";
            this.style.transitionDuration = "1s";
            setTimeout(function() {
                menu.style.transitionDuration = "0s";
                layout.style.filter = "brightness(1)";
                return touch = 0;
            }, 1000);
        } else {
            this.style.left = "23.6%";
            this.style.transitionDuration = "1s"
        }
    }
    for (var i = 0; i < nav.length; i++) {
        nav[i].onmouseover = function() {
            this.before.style.display = "block"
        }
    }
}
function callMenu() {
    menu.style.left = "23.6%";
    menu.style.transitionDuration = ".5s";
    layout.style.filter = "brightness(0.5)";
}
function drawback() {
    menu.style.left = "100%";
    layout.style.filter = "brightness(1)";
    other.style.top = "0px";
    other.style.display = "block";
}
function joinwithus() {
    drawback();
    setTimeout(function() {
        let data = "JoinWithUs.txt";
        fetch(data).then(x=>x.text()).then(f=>view.innerHTML = f);
    }, 450);
}
let joinUs = toggle.onclick = function() {
    other.style.top = "100%";
}
function openMail() {
    open("oxifo197@gmail.com");
}
function term() {
    drawback();
    setTimeout(function() {
        let data = "term.txt";
        fetch(data).then(x=>x.text()).then(f=>view.innerHTML = f);
    }, 100);
}
window.onload = function() {
    if (window.location.href == http) {
        fetch(data[rdn].path+".txt").then(x=>x.text()).then(y=>content.innerHTML = y+footer);
        if (rdn != data.length) {
            p = rdn+1;
            setTimeout(function() {
                const next = document.querySelector("footer");
                setTimeout(function() {
                    fetch(data[p].path+".txt").then(x=>x.text()).then(y=>next.innerHTML = y);
                }, 400);
            }, 300);
            NextX();
        }
    } else {
        let show = data.filter(function(gd) {
            return http+"?id="+gd.id == window.location.href;
        });
        fetch(show[0].path+".txt").then(x=>x.text()).then(y=>content.innerHTML = y);
    }
    localStorage.setItem("lasted", data.length);
    if (lasted == data.length) {
        new_.style.display = "none"
    } else {
        new_.textContent = data.length - lasted;
    }
}
function NextX() {
    if (rdn != data.length) {
        setTimeout(function() {
            const next = document.querySelector("footer");
            setTimeout(function() {
                fetch(data[n].path+".txt").then(x=>x.text()).then(y=>next.innerHTML = y);
            }, 400);
        }, 300);
    }
    return n = Math.floor(Math.random()*data.length);
}
function Next(t) {
    setTimeout(function() {
        open(window.location.href.concat("?id="+data[n].id));
    }, 10);
}
function newest() {
    let toast = document.querySelector("toast");
    if (data.length - lasted !== 0) {
        drawback();
        setTimeout(function() {
            fetch(data[0].path+".txt").then(x=>x.text()).then(y=>view.innerHTML=y+button);
        }, 350);
    }else {
        toast.style.bottom = "0px";
        menu.style.left = "100%";
        layout.style.filter = "brightness(1)";
        toast.textContent ="No Post Found";
        setTimeout(function() {
            toast.style.bottom = "-100%";
        },3500);
    }
}
function plus(){
    if(np < data.length){
    np +=1;
    fetch(data[np].path.concat(".txt")).then(x=>x.text()).then(y=>view.innerHTML=y+button);
    }else{
    np -=1;
    fetch(data[np].path.concat(".txt")).then(x=>x.text()).then(y=>view.innerHTML=y+button);
    }
 }
 function minus(){
    np -=1;
    fetch(data[np].path.concat(".txt")).then(x=>x.text()).then(y=>view.innerHTML=y+button);
 }