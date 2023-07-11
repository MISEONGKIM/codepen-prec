export class HeaderEvent {
  constructor() {
    this.menu = document.querySelector(".menu");
    this.menuStarter = document.querySelector(".menu-starter");
    this.menuStarter.addEventListener("click", () => {
      this.menu.style.opacity === "1" ? this.closeMenu() : this.openMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 740) {
        this.closeMenu();
        return;
      }
      this.menu.style.visibility = "visible";
      this.menu.style.opacity = "1";
    });
  }

  openMenu = () => {
    this.menu.style.visibility = "visible";
    this.menu.style.opacity = "1";
    document.querySelector("header h1").style.color = "#000";
    this.menuStarter.style.backgroundImage = 'url("img/menu-close.png")';
  };

  closeMenu = () => {
    this.menu.style.visibility = "hidden";
    this.menu.style.opacity = "0";

    document.querySelector("header h1").style.color = "#fff";
    this.menuStarter.style.backgroundImage = 'url("img/menu.png")';
  };
}
