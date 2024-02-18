let x = 0;
let y = 0;

let mouseX = 0;
let mouseY = 0;
let speed = 0.003;

let imgArr;
let bird;

// 마우스가 따라가는 움직임
window.onload = function () {
  imgArr = document.getElementsByTagName("img");
  bird = document.getElementsByTagName("video")[0];

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

  imgArr[0].style.transform =
    "translate(" + mouseX / 9 + "px," + mouseY / 9 + "px)";
  imgArr[1].style.transform =
    "translate(" + -(mouseX / 6) + "px," + -(mouseY / 6) + "px)";
  imgArr[2].style.transform =
    "translate(" + mouseX / 7 + "px," + mouseY / 7 + "px)";
  imgArr[3].style.transform =
    "translate(" + -(mouseX / 5) + "px," + -(mouseY / 2) + "px)";
  imgArr[4].style.transform =
    "translate(" + mouseX / 4 + "px," + mouseY / 3 + "px)";
  imgArr[5].style.transform =
    "translate(" + -(mouseX / 3) + "px," + -(mouseY / 2) + "px)";
  imgArr[6].style.transform =
    "translate(" + mouseX / 2 + "px," + mouseY / 3 + "px)";

  bird.style.transform = "translate(" + mouseX / 5 + "px," + mouseY / 5 + "px)";

  window.requestAnimationFrame(loop);
}
