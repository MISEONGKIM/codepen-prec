import { InterfaceCenterFixed } from "./InterfaceCenterFixed.js";

export class TextImgScroll extends InterfaceCenterFixed {
  constructor() {
    super();
    this.textImgSection = document.querySelector(".text-img-section");
  }

  event() {
    const halfOfNonImgArea =
      (window.innerHeight - this.textImgSection.offsetHeight) / 2;
    const startPosition = this.textImgSection.offsetTop - halfOfNonImgArea;

    if (window.scrollY > startPosition) {
      super.fixedCenter(this.textImgSection);
    } else {
      super.initialCenter(this.textImgSection);
    }
  }
}
