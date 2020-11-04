const burger = document.querySelector(".burger");
const burgerdiv = document.querySelectorAll(".burger div");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const actlink = document.querySelectorAll(".nav-links a");
const nav = document.querySelector(".navbar");
const logo = document.querySelector(".logo h4");
const heading = document.querySelector(".homecontent h1");
const para = document.querySelector(".homecontent p");
const cbtn=document.querySelector(".homecontent button")
window.addEventListener("load", () => {
  heading.style.animation = "move 1s ease"
  para.style.animation = "move 1.5s ease"
  cbtn.style.animation = "move 1.8s ease"

});

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  burger.classList.toggle("toggle");
  links.forEach((link) => {
    link.classList.add("fade");
  });
  actlink.forEach((li) => {
    li.style.color = "white";
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
    navlinks.classList.add("nav-links-colorchange");
    logo.style.color = "white";
    actlink.forEach((link) => {
      link.style.color = "white";
    });
    burgerdiv.forEach((item) => {
      item.classList.add("linecolorchange");
    });
  } else {
    nav.classList.remove("navcolorchange");
    navlinks.classList.remove("nav-links-colorchange");
    logo.style.color = "#2f2e41";
    burgerdiv.forEach((item) => {
      item.classList.remove("linecolorchange");
    });
    actlink.forEach((link) => {
      link.style.color = "#2f2e41";
    });
  }
};
