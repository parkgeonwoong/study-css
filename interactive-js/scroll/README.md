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

<br>

### ✅ scrollTop 패럴렉스 구현

```javascript
window.addEventListener("scroll", function (e) {
  scrollTop = document.documentElement.scrollTop;
  let per = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
  );

  bar.style.height = per + "%";

  cloudWrap.style.transform = "translate(0," + scrollTop / 1.2 + "px)";
});
```

- (윈도우 기준) 스크롤 한 번에 100픽셀씩 이동

- 모두가 100씩 이동할때 지정한 오브젝트만 100 / 1.2 = 83.3 씩 이동을 하게 되어 느리게 움직이는 느낌

- 반대로 100 \* .8 로 해도 비슷한 결과
