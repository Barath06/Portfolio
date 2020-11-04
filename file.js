const burger = document.querySelector(".burger");
const burgerdiv = document.querySelectorAll(".burger div");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const actlink = document.querySelectorAll(".nav-links a");
const nav = document.querySelector(".navbar");
const logo = document.querySelector(".logo h4");

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

function verify() {
  var pwd = document.getElementById("pwd");
  var cpwd = document.getElementById("cpwd");

  if (pwd.value != cpwd.value) {
    alert("Passwords doesn't match please make sure both are same");
    pwd.style.borderBottom = "solid 2px red";
    cpwd.style.borderBottom = "solid 2px red";
    return false;
  } else {
    return true;
  }
}
