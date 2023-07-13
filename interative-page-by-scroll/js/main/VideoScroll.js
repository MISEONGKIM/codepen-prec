export class VideoScroll {
  playback = 500;
  constructor() {
    this.videoSection = document.querySelector(".video-section");
    this.figure = this.videoSection.querySelector("figure");

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
      this.fixedPosition();
      this.videoPlay();
    } else {
      this.initialPosition();
    }

    const videoEndPosition =
      this.videoSection.offsetTop +
      this.videoSection.offsetHeight -
      (halfOfNonVideoArea + this.figure.offsetHeight);

    if (currentScroll > videoEndPosition) {
      this.initialPosition();
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

  fixedPosition() {
    if (this.figure.style.position === "fixed") return;

    this.figure.style.position = "fixed";
    this.figure.style.top = "50%";
    this.figure.style.left = "50%";
    this.figure.style.transform = "translate(-50%, -50%)";
  }

  initialPosition() {
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
}
