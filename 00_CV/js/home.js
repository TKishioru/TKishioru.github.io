// var imgabc = document.querySelector('div.img-bg').style.background = "url('./imgs/bg.jpg')";

var imgbg = document.querySelector('div.img-bg');
window.addEventListener('scroll', function() {
    var value = 150 + window.scrollY;
    // console.log("OK");
    imgbg.style.clipPath = "circle(" + value + "px at center)";
})