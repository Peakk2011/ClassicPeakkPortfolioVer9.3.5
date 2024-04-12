const MIN_SPEED = 1.5
const MAX_SPEED = 2.5

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

class Blob {
  constructor(el) {
    this.el = el
    const boundingRect = this.el.getBoundingClientRect()
    this.size = boundingRect.width
    this.initialX = randomNumber(0, window.innerWidth - this.size)
    this.initialY = randomNumber(0, window.innerHeight - this.size)
    this.el.style.top = `${this.initialY}px`
    this.el.style.left = `${this.initialX}px`
    this.vx =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1)
    this.vy =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1)
    this.x = this.initialX
    this.y = this.initialY
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size
      this.vx *= -1
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size
      this.vy *= -1
    }
    if (this.x <= 0) {
      this.x = 0
      this.vx *= -1
    }
    if (this.y <= 0) {
      this.y = 0
      this.vy *= -1
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY
      }px)`
  }
}

function initBlobs() {
  const blobEls = document.querySelectorAll('.bouncing-blob')
  const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl))

  function update() {
    requestAnimationFrame(update)
    blobs.forEach((blob) => {
      blob.update()
      blob.move()
    })
  }

  requestAnimationFrame(update)
}

initBlobs()


const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}
// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", e => {
  let clickedElm = e.target;
  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
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

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  if (window.CP.shouldStopExecution(0)) break;
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
window.CP.exitedLoop(0); function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });

  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 8
  });

};

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  });

};
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  });

};
// When the user clicks on div, open the popup
// pop up section when click on view more section on navbar

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// When the user clicks on div, open the popup
// pop up section when click on view more section on navbar

function ON2() {
  document.getElementById("overlay-moreOptions").style.display = "block";
}

function Off2() {
  document.getElementById("overlay-moreOptions").style.display = "none";
  // Make on click on off2()
};

function scrollEventHandler() {
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

function launch_toast() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back!";
})
window.addEventListener("focus", () => {
  document.title = docTitle;
});

