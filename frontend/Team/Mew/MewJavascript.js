function on() {
    document.getElementById("overlay").style.display = "block";
}

// overlay language

function off() {
    document.getElementById("overlay").style.display = "none";
}

var $loader = document.querySelector('.loader')

window.onload = function () {
    $loader.classList.remove('loader--active')
};

document.querySelector('.btn').addEventListener('click', function () {
    $loader.classList.add('loader--active')

    window.setTimeout(function () {
        $loader.classList.remove('loader--active')
    }, 5000)
})

// dark mode

const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
}
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));