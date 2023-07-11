export class MainEvent {
  constructor() {
    window.addEventListener("scroll", () => {
      this.offText();

      const { startY, endY, currentScroll } = this.getScrollInfo();
      console.log(startY, endY, currentScroll);
      if (!this.isTextArea({ startY, endY, currentScroll })) {
        return;
      }
      this.onText({ startY, endY, currentScroll });
    });
  }

  offText() {
    if (document.getElementById("active")) {
      document.getElementById("active").removeAttribute("id");
    }
  }

  onText({ startY, endY, currentScroll }) {
    const listItems = document.querySelectorAll(".scrolling .text-list li");
    const listItemGap = (endY - startY) / listItems.length;
    const index = Math.floor((currentScroll - startY) / listItemGap);
    listItems[index].setAttribute("id", "active");
  }

  getScrollInfo() {
    const startY = document.querySelector(".scrolling").offsetTop;
    const endY =
      startY + document.querySelector(".scrolling .text-list").offsetHeight;
    const currentScroll = window.scrollY + window.innerHeight / 2;
    return { startY, endY, currentScroll };
  }

  isTextArea({ startY, endY, currentScroll }) {
    if (currentScroll <= startY || currentScroll >= endY) {
      return false;
    }
    return true;
  }
}
