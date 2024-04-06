function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("myHamburger-menu").style.top = "0";
    } else {
      document.getElementById("myHamburger-menu").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  var lastBlur = 0;
var filterElt = document.getElementById("blur").firstElementChild;
var checkScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 80;

    function clear() {
      lastPos = null;
      delta = 0;
      clearBlur();
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

var body = document.body,
    timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  
  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
  
    var scrollSpeed = checkScrollSpeed();
    var blur = Math.round(Math.abs(scrollSpeed) / 5);
    setBlur(blur);
  
}, false);


function setBlur(v){
  	if(v<2) v=0;
		if(v>200) v=50; 
    filterElt.setAttribute("stdDeviation","0," + v );
		lastBlur=v;  
}

function clearBlur() {
  var i = setInterval(function(){
    if (lastBlur < 0) {
      clearInterval(i);
      setBlur(0);
    } else {
      setBlur(lastBlur);
      lastBlur -= 10;
    }
  }, 20)
}

$('.goto').on('click', function(){
   var target = "#" + $(this).attr('data-go');
   $(window).scrollTo(target,1000);
});




