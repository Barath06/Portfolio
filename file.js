const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const actlink = document.querySelectorAll(".nav-links a");
const nav = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  burger.classList.toggle("toggle");
  links.forEach((link) => {
    link.classList.add("fade");
  });
  actlink.forEach((li) => {
    li.addEventListener("click", () => {
      navlinks.classList.remove("open");
      burger.classList.remove("toggle");
      links.forEach((link) => {
        link.classList.remove("fade");
      });
    });
  });
});

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 70) {
    nav.classList.add("navcolorchange");
  } else {
    nav.classList.remove("navcolorchange");
  }
};

