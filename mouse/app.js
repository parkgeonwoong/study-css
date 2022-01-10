let cursor_item;
let h1;
let x = 0;
let y = 0;

let mouseX = 0;
let mouseY = 0;
let speed = 0.03;

// 마우스가 따라가는 움직임
window.onload = function () {
  h1 = document.getElementsByTagName("h1")[0];
  cursor_item = document.querySelectorAll(".cursor_item")[0];

  window.addEventListener("mousemove", handleMouse, false);

  function handleMouse(e) {
    x = e.clientX;
    y = e.clientY;

    // console.log(e.clientX, e.clientY);
  }
  loop();
};

function loop() {
  // console.log(x, y);
  mouseX += (x - mouseX) * speed;
  mouseY += (y - mouseY) * speed;

  h1.innerHTML = "x: " + x + " y: " + y + " mouseX:" + mouseX;

  cursor_item.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";
  // cursor_item.style.transform = "translate(" + x + "px," + y + "px)";
  window.requestAnimationFrame(loop);
}

// 마우스 클릭으로 이동
// window.onload = function () {
//   h1 = document.getElementsByTagName("h1")[0];
//   cursor_item = document.querySelectorAll(".cursor_item")[0];

//   window.addEventListener("click", handleMouse, false);

//   function handleMouse(e) {
//     x = e.clientX;
//     y = e.clientY;

//     cursor_item.style.transform = "translate(" + x + "px," + y + "px)";
//   }
// };
