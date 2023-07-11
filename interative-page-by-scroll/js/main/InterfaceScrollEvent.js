export class InterfaceScrollEvent {
  getScrollInfo(el) {
    const startY = el.offsetTop;
    const endY = startY + el.offsetHeight;
    return { startY, endY };
  }

  isArea({ startY, endY, currentScroll }) {
    if (currentScroll <= startY || currentScroll >= endY) {
      return false;
    }
    return true;
  }
}
