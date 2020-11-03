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
