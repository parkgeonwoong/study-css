let cursor_item;
let x = 0;
let y = 0;

let mouseX = 0;
let mouseY = 0;

window.onload = function () {
  let h1 = document.getElementsByTagName("h1")[0];
  cursor_item = document.querySelectorAll(".cursor_item")[0];

  window.addEventListener("mousemove", handleMouse, false);

  function handleMouse(e) {
    x = e.clientX;
    y = e.clientY;

    h1.innerHTML = "x: " + x + " y: " + y;
    // console.log(e.clientX, e.clientY);
  }
  loop();
};

function loop() {
  // console.log(x, y);
  mouseX += x - mouseX;
  cursor_item.style.transform = "translate(" + x + "px," + y + "px)";
  window.requestAnimationFrame(loop);
}
