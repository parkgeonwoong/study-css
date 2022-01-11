# 📌 스크롤 값을 활용한 인터랙티브

<br>

- CSS 그라디언트 적용

```css
background: linear-gradient(150deg, tomato, orange, white);
```

<br>

### ✅ 스크롤 값 받아오기

```javascript
window.addEventListener("scroll", function (e) {
  scrollTop = document.documentElement.scrollTop;
});
```

<br>

### ✅ 화면 width 길이의 스크롤 바 구현. 백분율 구하는 공식.

> **가로 퍼센트값 = 현재 스크롤 탑 위치 / (문서 전체 길이 - 윈도우 창 높이 ) \* 100;**

```javascript
per =
  Math.round(
    scrollTop / (document.documentElement.scrollHeight - window.innerHeight)
  ) * 100;
```
