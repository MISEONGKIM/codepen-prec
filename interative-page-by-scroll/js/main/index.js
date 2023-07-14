import { TextListScroll } from "./TextListScroll.js";
import { ImgScroll } from "./ImgScroll.js";
import { VideoScroll } from "./VideoScroll.js";
import { TextImgScroll } from "./TextImgScroll.js";

export class MainEvent {
  constructor() {
    const textList = new TextListScroll();
    const img = new ImgScroll();
    const video = new VideoScroll();
    const textImg = new TextImgScroll();
    window.addEventListener("scroll", () => {
      textList.event();
      img.event();
      video.event();
      textImg.event();
    });
  }
}
