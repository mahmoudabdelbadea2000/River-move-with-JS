// moving the landing page
let stars = document.querySelector("#stars"),
    moon = document.querySelector("#moon"),
    logo = document.querySelector(".landing .logo"),
    mountains3 = document.querySelector("#mountains3"),
    mountains4 = document.querySelector("#mountains4"),
    river = document.querySelector("#river"),
    boat = document.querySelector("#boat"),
    mountains7 = document.querySelector("#mountains7"),
    landing = document.querySelector(".landing");


window.onscroll = () => {
    let value = window.scrollY;
    stars.style.left = `${value}px`;
    moon.style.top = `${value * 4}px`;
    mountains3.style.top = `${value * 2}px`;
    mountains4.style.top = `${value * 1.5}px`;
    river.style.top = `${value * 3}px`;
    boat.style.left = `${value * 4}px`;
    logo.style.fontSize = `${value}px`;
    if (scrollY >= 67) {
        logo.style.fontSize = `67px`;
        logo.style.position = `fixed`;
        if (scrollY >= 386) {
            logo.style.display = "none";
        } else {
            logo.style.display = "block";
        }
        if (scrollY >= 105) {
            landing.style.background = "linear-gradient(#376281, #10001f)";
        } else {
            landing.style.background = "linear-gradient(var(--main-color), #10001f)";
        }
    }
};

