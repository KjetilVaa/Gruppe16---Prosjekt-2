window.onload = function (e) {
    scroll();
    console.log("test")
}

function scroll() {
    window.addEventListener('scroll', function () {
        if(window.pageYOffset>20) {
            document.getElementById("header").className="header headerPicture";
        }
        else if(window.pageYOffset<20){
            document.getElementById("header").className="header";
        }
    });
}
