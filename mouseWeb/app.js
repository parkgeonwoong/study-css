let human;
let bg;
let h1;
let pipe;
let text3d;
let x = 0;
let y = 0;

let mouseX = 0;
let mouseY = 0;
let speed = 0.006;

// 마우스가 따라가는 움직임
window.onload = function () {
  h1 = document.getElementsByTagName("h1")[0];
  human = document.querySelectorAll(".human")[0];
  bg = document.querySelectorAll(".bg")[0];
  pipe = document.querySelectorAll(".pipe")[0];
  text3d = document.querySelectorAll(".text3d")[0];

  window.addEventListener("mousemove", handleMouse, false);

  function handleMouse(e) {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  }
  loop();
};

function loop() {
  mouseX += (x - mouseX) * speed;
  mouseY += (y - mouseY) * speed;

  human.style.transform =
    "translate(" + mouseX / 9 + "px," + mouseY / 9 + "px)";
  bg.style.transform =
    "translate(" + -(mouseX / 8) + "px," + -(mouseY / 8) + "px)";
  text3d.style.transform =
    "translate3d(" +
    -(mouseX / 2) +
    "px," +
    -(mouseY / 2) +
    "px,0) rotate3d(0,1,0," +
    -mouseX / 50 +
    "deg)";

  pipe.style.transform = "translate(" + mouseX / 4 + "px," + mouseY / 3 + "px)";

  window.requestAnimationFrame(loop);
}
