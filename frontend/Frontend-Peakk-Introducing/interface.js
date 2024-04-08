/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  const btn = document.querySelector(".btn-toggle");

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  const Darkmode = document.querySelector(".Darkmode");

  Darkmode.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });
  
function openNav() {
  document.getElementById("myNav").style.width = "280px";
  document.querySelector(".control").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector(".control").style.display = "none";
};