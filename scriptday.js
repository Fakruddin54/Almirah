let icon = document.getElementById("moonicon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun95.png";
  } else {
    icon.src = "moon95.png";
  }
};
