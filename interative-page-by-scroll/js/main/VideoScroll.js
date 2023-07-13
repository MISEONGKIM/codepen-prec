export class VideoScroll {
  playback = 500;
  constructor() {
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
      this.fixedVideoPosition();
      this.videoPlay();
      this.showFigcaption();
    } else {
      this.initialVideoPosition();
      this.hideFigcaption();
    }

    const videoEndPosition =
      this.videoSection.offsetTop +
      this.videoSection.offsetHeight -
      (halfOfNonVideoArea + this.figure.offsetHeight);

    if (currentScroll > videoEndPosition) {
      this.initialVideoPosition();
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

  fixedVideoPosition() {
    if (this.figure.style.position === "fixed") return;

    this.figure.style.position = "fixed";
    this.figure.style.top = "50%";
    this.figure.style.left = "50%";
    this.figure.style.transform = "translate(-50%, -50%)";
  }

  initialVideoPosition() {
    if (this.figure.style.position === "relative") return;

    this.figure.style.position = "relative";
    this.figure.style.top = "initial";
    this.figure.style.left = "initial";
    this.figure.style.transform = "initial";
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
    console.log(
      y,
      1 - y / this.figcaption.offsetHeight,
      y / this.figcaption.offsetHeight
    );
    this.figcaption.style.opacity = 1 - y / this.figcaption.offsetHeight;

    this.figcaption.style.transform = `translateY(${y}px)`;
  }

  hideFigcaption() {
    this.figcaption.style.opacity = 0;
    this.figcaption.style.transform = "translateY(35rem)";
  }
}
