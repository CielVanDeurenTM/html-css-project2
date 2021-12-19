//footer
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

window.onload = myFunction3();
window.onresize = function() {myFunction3()};

var delayInMilliseconds = 100; //0.1s


function myFunction3(){
  var footer = document.getElementById("footer") 
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)  {
    footer.classList.add("stickyBottom") 
  }
  else{
    footer.classList.remove("stickyBottom")
  } 
}

//responsive navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
