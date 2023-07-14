import { InterfaceCenterFixed } from "./InterfaceCenterFixed.js";

export class VideoScroll extends InterfaceCenterFixed {
  playback = 500;
  constructor() {
    super();

    this.videoSection = document.querySelector(".video-section");
    this.figure = this.videoSection.querySelector("figure");
    this.figcaption = this.videoSection.querySelector("figcaption");

    this.video = this.videoSection.querySelector("video");
    if (this.video.duration) {
      this.setVideoSctionHeight(this.video.duration);
      return;
    }

    this.video.onloadedmetadata = () => {
      this.setVideoSctionHeight(this.video.duration);
    };
  }

  event() {
    const currentScroll = window.scrollY;
    const halfOfNonVideoArea =
      (window.innerHeight - this.figure.offsetHeight) / 2;
    const videoStartPosition = this.videoSection.offsetTop - halfOfNonVideoArea;

    if (currentScroll > videoStartPosition) {
      super.fixedCenter(this.figure);
      this.videoPlay();
      this.showFigcaption();
    } else {
      super.initialCenter(this.figure);
      this.hideFigcaption();
    }

    const videoEndPosition =
      this.videoSection.offsetTop +
      this.videoSection.offsetHeight -
      (halfOfNonVideoArea + this.figure.offsetHeight);

    if (currentScroll > videoEndPosition) {
      super.initialCenter(this.figure);
      //transform initial 하면 위로 휙 올라가서 사라진 거 처럼 보임
      // 아래에 위치할 수 있도록 위치 변경
      this.figure.style.transform = `translateY(${
        this.videoSection.offsetHeight - this.figure.offsetHeight
      }px)`;
    }
  }

  setVideoSctionHeight(duration) {
    this.videoSection.style.height = duration * this.playback + "px";
  }

  videoPlay() {
    this.video.currentTime =
      (window.scrollY - this.videoSection.offsetTop) / this.playback;
  }

  showFigcaption() {
    const figcationEndPosition =
      this.videoSection.offsetTop +
      this.figcaption.offsetTop +
      this.figcaption.offsetHeight;
    const y = figcationEndPosition - window.scrollY;
    if (y < 0) return;
    this.figcaption.style.opacity = 1 - y / this.figcaption.offsetHeight;

    this.figcaption.style.transform = `translateY(${y}px)`;
  }

  hideFigcaption() {
    this.figcaption.style.opacity = 0;
    this.figcaption.style.transform = "translateY(35rem)";
  }
}
