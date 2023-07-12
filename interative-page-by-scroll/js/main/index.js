import { TextListScroll } from "./TextListScroll.js";
import { ImgScroll } from "./ImgScroll.js";
import { VideoScroll } from "./VideoScroll.js";

export class MainEvent {
  constructor() {
    window.addEventListener("scroll", () => {
      new TextListScroll().event();
      new ImgScroll().event();
      new VideoScroll().event();
    });
  }
}
