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
