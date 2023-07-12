import { InterfaceScrollEvent } from "./InterfaceScrollEvent.js";

export class VideoScroll extends InterfaceScrollEvent {
  playback = 500;
  constructor() {
    super();

    this.videoSection = document.querySelector(".video-section");
    this.video = this.videoSection.querySelector("video");
    this.video.addEventListener("loadedmetadata", () => {
      this.videoSection.style.height =
        this.video.duration * this.playback + "px";
    });
  }

  event() {
    const info = super.getScrollInfo(this.videoSection);
    const startY = info.startY;
    const endY = info.endY;
    const currentScroll = window.scrollY;
    if (!super.isArea({ startY, endY, currentScroll })) {
      this.stopWithScroll();
      return;
    }
    this.playWithScroll({ startY, endY, currentScroll });
  }

  playWithScroll() {
    const figure = this.videoSection.querySelector("figure");
    figure.style.position = "fixed";
  }

  stopWithScroll() {}
}
