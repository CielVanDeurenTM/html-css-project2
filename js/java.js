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
//leeftijd
window.onload = function() {myFunction4()}

function myFunction4() {

  var d1 = "09"
  var m1 = "01"
  var y1 = "2000"

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById('leeftijd').innerText = y+" jaar oud";
}