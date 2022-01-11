# 스크롤 값을 활용한 인터랙티브

<br>

- CSS 그라디언트 적용

```css
background: linear-gradient(150deg, tomato, orange, white);
```

<br>

- 스크롤 값 받아오기

```javascript
window.addEventListener("scroll", function (e) {
  scrollTop = document.documentElement.scrollTop;
});
```
