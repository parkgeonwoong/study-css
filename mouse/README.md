# Mouse를 활용한 인터렉티브

## mouse move 활용

```javascript
window.addEventListener("mousemove", function(e) {
    console.log(e.clientX, e.clientY);
}
```

- 위에 처럼 마우스 X, Y 좌표가 직접 console에 찍힌다.

<br>

```javascript
document.getElementsByClassName("className")[0];
```

- 배열로 넘어오기 때문에 첫번째 요소인 [0]을 선택해준다.

<br>

## requestAnimationFrame == loop

- loop라는 자연스럽게 움직이게 활용
- 화려한 애니메이션 & 3D 컨텐츠에 활용

```javascript
function loop() {
  console.log("계속 실행됩니다.");

  window.requestAnimationFrame(loop);
}
```
