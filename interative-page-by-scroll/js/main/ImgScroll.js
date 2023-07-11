import { InterfaceScrollEvent } from "./InterfaceScrollEvent.js";

export class ImgScroll extends InterfaceScrollEvent {
  constructor() {
    super();
    this.img = document.querySelector(".scrolling .santa img");
  }

  event() {
    const info = super.getScrollInfo(this.img);
    const startY = info.startY + 100;
    const endY = info.endY + 100;
    const currentScroll = window.scrollY + window.innerHeight;
    if (super.isArea({ startY, endY, currentScroll })) {
      this.show({ startY, endY, currentScroll });
      return;
    }
    this.hide();
  }

  show({ startY, endY, currentScroll }) {
    const ratio = (currentScroll - startY) / (endY - startY);
    const x = 160 - 160 * ratio;
    const y = -(26 - 26 * ratio);
    const rotate = 23 - 23 * ratio;
    this.img.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  }

  hide() {}
}
