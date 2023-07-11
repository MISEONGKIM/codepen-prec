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

window.addEventListener("scroll", () => {
  if (document.getElementById("active")) {
    document.getElementById("active").removeAttribute("id");
  }
  const startY = document.querySelector(".scrolling-text-list").offsetTop;
  const endY =
    startY + document.querySelector(".scrolling-text-list").offsetHeight;
  const currentScroll = window.scrollY + window.innerHeight / 2;

  if (currentScroll <= startY || currentScroll >= endY) {
    return;
  }

  const listItems = document.querySelectorAll(".scrolling-text-list ul li");
  const listItemGap = (endY - startY) / listItems.length;
  const index = Math.floor((currentScroll - startY) / listItemGap);
  listItems[index].setAttribute("id", "active");
});
