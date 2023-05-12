const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
// when someone clicks hamburger menu 
navToggle.addEventListener("click" , () => {
  // if menu is closed then open it
const visibility = nav.getAttribute("data-visible");

if(visibility === "false") {
  nav.setAttribute("data-visible", true);
} else {
  nav.setAttribute("data-visible", false);
}


})


