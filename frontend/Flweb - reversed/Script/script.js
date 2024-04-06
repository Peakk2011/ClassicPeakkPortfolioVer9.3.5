const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
}
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

$(function() {
  $('.item').each(function() {
    var $img = $('img', this).attr('src');
    $(this).css({'background-image': 'url(' + $img + ')'});
  });
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Dark Mode
}

window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", (event) => {
       const theme = event.matches ? "dark" : "light";
   });

   