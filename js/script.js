//button UP

buttonUp = document.getElementById("button-up");
buttonUp.addEventListener("click", scrollUp);

function scrollUp() {
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)"
    }
}

///



window.onscroll = function () { 

    var scroll = document.documentElement.scrollTop

    if (scroll > 200) {
        buttonUp.style.transition = "all 300ms ease";
        buttonUp.style.transform = "scale(1)"
    } else if (scroll < 200) {
        buttonUp.style.transition = "all 300ms ease";
        buttonUp.style.transform = "scale(0)"
    }

}
