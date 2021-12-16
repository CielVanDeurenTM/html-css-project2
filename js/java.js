window.onscroll = function() {myFunction2()};

var navbar = document.getElementById("myTopnav");
var content = document.getElementById("topContent")
var sticky = navbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    content.classList.add("mt-5")
  } else {
    navbar.classList.remove("sticky");
    content.classList.remove("mt-5")
  }
} 





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  