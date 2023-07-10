const menuStarter = document.querySelector(".menu-starter");
const menu = document.querySelector(".menu");

const openMenu = () => {
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
  document.querySelector("header h1").style.color = "#000";
  menuStarter.style.backgroundImage = 'url("img/menu-close.png")';
};

const closeMenu = () => {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";

  document.querySelector("header h1").style.color = "#fff";
  menuStarter.style.backgroundImage = 'url("img/menu.png")';
};

menuStarter.addEventListener("click", () => {
  menu.style.opacity === "1" ? closeMenu() : openMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 740) {
    closeMenu();
    return;
  }
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
});
