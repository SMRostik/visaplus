;(function(){
    function S(a){
        return document.querySelector(a);
    }
    function SA(a){
        return document.querySelectorAll(a);
    }
    var img = SA(".carousel-img-line > img");
    var lb = S(".my-carousel-left");
    var rb = S(".my-carousel-right");
    var line = S(".carousel-img-line");
    var clickCount = 0;
    line.style.left = 0;
    lb.onclick = leftButton;
    //rb.onclick = rightButton;
    lb.addEventListener("click", leftButton);
    rb.addEventListener("click", rightButton);
    function rightButton(){
        var a = line.style.left;
        if(clickCount < img.length-4){
            line.style.left = (parseInt(a)-img[clickCount].offsetWidth-16)+"px";
            clickCount++;
        }
    }
    function leftButton(){
        var a = line.style.left;
        if(clickCount!=0){
            clickCount--;
            line.style.left = (parseInt(a)+img[clickCount].offsetWidth+16)+"px";
            
        }
    }
}());