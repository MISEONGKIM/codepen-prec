# Parallax scrolling 기법

## CSS로 구현 perspective 이용

- css로는 간단한 딱 parallax scolling만하는 기능 구현 시 사용하면 좋다고 함.

* 해당 요소의 z = 0 평면과 사용자 사이의 거리를 정의
* transform 효과를 주고자 하는 부모 요소에 적용
* perspective에 따른 변형 효과
  - perspective가 클수록, (즉 거리가 멀수록) 변형 효과가 적음
  - perspective가 작을수록, (즉 거리가 가까울수록) 변형 효과가 큼

## javascript로 구현

- css보다 할 수 있는 게 많음 자유도가 높음.

* window.scrollY, transform을 이용해서 구현

```
const sun = document.getElementById("sun");
const grayCloud = document.getElementById("gray-clouds");
const whiteCloud = document.getElementById("white-clouds");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sun.style.transform = `translateY(${scrollY * 1.05}px)`;

  //좌우로 움직이는 건 자바스크립트에서만 가능
  grayCloud.style.transform = `translateX(${scrollY * 0.125}px)`;
  whiteCloud.style.transform = `translateX(${scrollY * -0.125}px)`;
});

```
