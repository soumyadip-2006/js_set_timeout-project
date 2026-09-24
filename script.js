var btn = document.querySelector("button")
var persent = document.querySelector("#persent")
var growth = document.querySelector("#growth")
var grow = 0;

btn.addEventListener("click", function () {
var int  =  setInterval(function () {
        console.log(grow);

        grow++
        persent.innerHTML = grow + "%"
        growth.style.width = grow + "%"

    }, 100)
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = "Downloaded File"
        btn.style.opacity = 0.5;
    }, 10000);
}