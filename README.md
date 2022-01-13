# 📌 Interactive Web

- 자주 사용하는 인터랙티브 컨텐츠 제작 스킬
- 모션에 감성, 페럴랙스 스크롤 효과
- 자바스크립트를 통해 마우스 움직임에 따라 자연스러운 움직임

<br>

## ✅ mouse

- 마우스의 x, y 좌표를 JS로 직접 찍어보면서 기본 개념 다루기
- requestAnimationFrame을 이용하여 콜백함수로 60프레임을 다루어 자연스러운 animation 효과를 나타낸다.
- 마우스의 자연스러운 움직임을 위해서 시간차에 따른 변화량을 사용 (loop = requestAnimationFrame)
- CSS속성을 JS로 나타내어 필요한 부분, 세심한 부분에 CSS 속성을 대입한다.

<br>

```javascript
let cursor;

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;

window.onload = function () {
  cursor = document.querySelector(".cursor");
  window.addEventListener("mousemove", handleMouse, false);

  function handleMouse(e) {
    x = e.clientX;
    y = e.clientY;
  }
  loop();
};

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  cursor.style.transform = "translate(" + mx + "px," + my + "px)";
  window.requestAnimationFrame(loop);
}
```

<br>

### 참고 사이트

- https://www.nytimes.com/paidpost/allbirds/the-view-from-above.html

- https://news.joins.com/DigitalSpecial/230

- https://news.joins.com/DigitalSpecial/306

<br>

### ➡️ mouseWeb

- 위에 기초하여 Web페이지 작성

<br>

### ➡️ nytimes

- 뉴욕타임즈의 인터랙티브 웹을 직접 구현

<br>

## ✅ 스크롤 값을 활용한 인터렉티브

- 패럴랙스는 레이어가 존재해야 한다. (멈춰 있는 레이어, 천천히 움직이는 레이어, 빨리 움직이는 레이어, 시선)

- 스크롤 값을 받아오는 것 부터 시작

- width, height로 보여주는 백분율

<br>

`Parallax Scrolling` : 사용자가 스크롤할 때 배경 이미지가 느리게 움직이며, 근거리를 빨리 움직이는 즉 입체감을 느낄 수 있는 디자인 기법

- 스크롤을 움직일 때마다 transform의 translate, scale, opacity 등 변화를 직접 준다.

```javascript
window.addEventListener("scroll", function (e) {
  scrollTop = document.documentElement.scrollTop;

  h1.style.transform = "translate(0," + -scrollTop / 10 + "px)";
  coverImg.style.transform = "scale(" + (1 + scrollTop / 1000) + ")";
  cover.style.opacity = 0.3 + scrollTop / 1000;
});
```

<br>

### 참고 사이트

- https://www.cabletv.com/the-walking-dead
- https://neal.fun/deep-sea/

<br>

### ➡️ scroll-branch

- 스크롤 페이드인 효과
- 브런치 스크롤 스타일

<br>

### ➡️ parallax Page

- 입체감을 준 페럴랙스 페이지 구현
- 지금 까지 사용한 마우스의 움직임에 따라 사물의 변화, 스크롤 패럴렉스 사용

<br>

## ✅ 인터랙티브 교차 페이징

<br>

## ✅ translateZ 활용한 입체적인 페이지

- translateZ : 앞 뒤로 움직여서 입체감을 높여준다
- perspective : 깊이감을 준다. 적으면 변화가 빠르고, 높으면 변화가 천천히

<br>

```javascript
let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function () {
  progressBar = document.getElementsByClassName("progressBar")[0];
  imageAll = document.querySelectorAll(".parallax_image");

  totalNum = imageAll.length;

  window.addEventListener("scroll", scrollFunc);
};

function scrollFunc(e) {
  scrollTop = this.scrollY;

  for (var i = 0; i < totalNum; i++) {
    imageAll[i].style.transform =
      "perspective(400px) translateZ(" +
      scrollTop / (5 * (totalNum - i)) +
      "px)";
    // imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)"; 동시에 움직여 입체감이 없다
  }
}
```
