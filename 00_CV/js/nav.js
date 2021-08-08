window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var img = document.getElementById("myImg").height;
var sticky = navbar.offsetTop+img;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}