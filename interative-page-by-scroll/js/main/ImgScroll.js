import { InterfaceScrollEvent } from "./InterfaceScrollEvent.js";

export class ImgScroll extends InterfaceScrollEvent {
  translateX = 160;
  translateY = -26;
  rotate = 23;

  constructor() {
    super();
    this.img = document.querySelector(".scrolling .santa img");
  }

  event() {
    const info = super.getScrollInfo(this.img);
    const startY = info.startY + 100;
    const endY = info.endY + 100;
    const currentScroll = window.scrollY + window.innerHeight - 100;
    if (super.isArea({ startY, endY, currentScroll })) {
      this.show({ startY, endY, currentScroll });
      return;
    }

    if (endY < currentScroll) {
      this.hide({ endY, currentScroll });
    }
  }

  show({ startY, endY, currentScroll }) {
    const ratio = (currentScroll - startY) / (endY - startY);
    const x = this.translateX - this.translateX * ratio;
    const y = -(this.translateY - this.translateY * ratio);
    const r = this.rotate - this.rotate * ratio;
    this.img.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  hide({ endY, currentScroll }) {
    const ratio = (currentScroll - endY) / 300;
    if (ratio > 1) return;
    const x = this.translateX * ratio;
    const y = -(this.translateY * ratio);
    const r = this.rotate * ratio;

    this.img.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
  }
}
