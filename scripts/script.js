console.log("hello world");
const hamburger = document.getElementById("menu-btn");
var x = document.getElementById("menu");
hamburger.addEventListener('click',(e)=> {
  x.classList.toggle("hide");
  // if (x.style.display === "none") {
  //     x.style.display = "block";
  // } else {
  //     x.style.display = "none";
  // }

});