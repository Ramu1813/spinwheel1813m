function spinWheel(){
    document.getElementById("Loading").style.display="none"
    document.getElementById("MainWheel").style.display="flex"
}
function rotateSpin(){
    var randomNum=Math.floor(Math.random()*360);
    document.getElementById("spin").style.transition="rotate 10s"
    document.getElementById("spin").style.rotate=randomNum*10+"deg"
}