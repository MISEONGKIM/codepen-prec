export class InterfaceCenterFixed {
  fixedCenter(el) {
    if (el.style.position === "fixed") return;

    el.style.position = "fixed";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%, -50%)";
  }

  initialCenter(el) {
    if (el.style.position === "relative") return;

    el.style.position = "relative";
    el.style.top = "initial";
    el.style.left = "initial";
    el.style.transform = "initial";
  }
}
