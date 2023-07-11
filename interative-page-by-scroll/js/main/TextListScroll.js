import { InterfaceScrollEvent } from "./InterfaceScrollEvent.js";

export class TextListScroll extends InterfaceScrollEvent {
  constructor() {
    super();
    this.list = document.querySelector(".scrolling .text-list");
  }

  event() {
    this.hide();

    const { startY, endY } = super.getScrollInfo(this.list);
    const currentScroll = window.scrollY + window.innerHeight / 2;
    if (!super.isArea({ startY, endY, currentScroll })) {
      return;
    }
    this.show({ startY, endY, currentScroll });
  }

  hide() {
    if (document.getElementById("active")) {
      document.getElementById("active").removeAttribute("id");
    }
  }

  show({ startY, endY, currentScroll }) {
    const listItems = this.list.children;
    const listItemGap = (endY - startY) / listItems.length;
    const index = Math.floor((currentScroll - startY) / listItemGap);
    listItems[index].setAttribute("id", "active");
  }
}
