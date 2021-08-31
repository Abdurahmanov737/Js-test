var btnLondon = document.querySelector(".my-menu .London")
var btnParis = document.querySelector(".my-menu .Paris")
var btnTokyo = document.querySelector(".my-menu .Tokyo")

var myp1 = document.querySelector(".my-menu .p1")
var myp2 = document.querySelector(".my-menu .p2")
var myp3 = document.querySelector(".my-menu .p3")


btnLondon.onclick= function(){
    myp1.classList.add("active");
    myp2.classList.remove("active");
    myp3.classList.remove("active");


}


btnParis.onclick= function(){
    myp1.classList.remove("active");
    myp2.classList.add("active");
    myp3.classList.remove("active");
}

btnTokyo.onclick= function(){
    myp1.classList.remove("active");
    myp2.classList.remove("active");
    myp3.classList.add("active");
}