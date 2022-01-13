let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let imgAll;
let totalNum = 0;
let progressBar;

window.onload = function () {
  progressBar = document.getElementsByClassName("progressBar")[0];

  imgAll = document.querySelectorAll(".parallax_image");
  totalNum = imgAll.length;

  window.addEventListener("resize", stageResize, false);
  window.addEventListener("mousemove", mouseMove, false);
  window.addEventListener("scroll", scrollFunc, false);

  stageResize();
  // loop();
};

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;

  let per = Math.ceil((scrollTop / (_documentHum - _windowHNum)) * 100);
  progressBar.style.width = per + "%";

  for (var i = 0; i < totalNum; i++) {
    imgAll[i].style.transform =
      "perspective(400px) translateZ(" +
      scrollTop / (5 * (totalNum - i)) +
      "px)";
  }
}

function stageResize() {
  _documentHum = document.body.offsetHeight;
  _windowHNum = window.outerHeight;
}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  imgAll[9].style.transform =
    "translate3d(" + mx / 140 + "px," + -scrollTop * 0.22 + "px, 0px)";
  imgAll[10].style.transform =
    "scale(1.1) translate(" + mx / 50 + "px," + -scrollTop * 0.25 + "px)";
  imgAll[2].style.transform =
    "scale(1.2) translate(" + -mx / 20 + "px," + my / 20 + "px)";

  window.requestAnimationFrame(loop);
}

function mouseMove(e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
}
