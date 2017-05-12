document.getElementById("toggle").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("header").classList.toggle("open");
    document.getElementById("body").classList.toggle("overflow-hidden");
});

var lastScrollTOp = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.body.scrollTop;
    if (currentScroll > lastScrollTOp) {
        console.log("down"); // down
    } else {
        console.log("up"); //up
    }
    lastScrollTOp = currentScroll; //ignorar por ahora -_-
}, false);