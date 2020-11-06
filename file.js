const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const actlink = document.querySelectorAll(".nav-links a");
const nav = document.querySelector(".navbar");
const heading = document.querySelector(".homecontent h1");
const para = document.querySelector(".homecontent p");
const cbtn = document.querySelector(".homecontent button");
const abth2 = document.querySelector(".aboutcontent h2");
const abtp = document.querySelector(".aboutcontent p");

window.addEventListener("load", () => {
  heading.style.animation = "move 1s ease";
  para.style.animation = "move 1.5s ease";
  cbtn.style.animation = "move 1.8s ease";
});

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
  // console.log(top);
  if (top >= 70) {
    nav.classList.add("navcolorchange");
  } else {
    nav.classList.remove("navcolorchange");
  }
  if (top = 750) {
    abth2.style.animation = "move 1.3s ease";
    abtp.style.animation = "move 1.7s ease";
  }
};
