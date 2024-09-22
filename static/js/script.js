let scrollButton = document.getElementById("scroll-btn");
scrollButton.addEventListener("click", scrollToTop);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } 
    else {
        scrollButton.style.display = "none"
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0, behavior: "smooth"
    });
}
