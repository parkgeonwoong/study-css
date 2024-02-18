let scrollTop = 0;
let bar;
let cloudWrap;
let cloudWrap2;

window.onload = function () {
  bar = document.querySelectorAll(".progress__bar")[0];
  cloudWrap = document.querySelectorAll(".cloudWrap")[0];
  cloudWrap2 = document.getElementsByClassName("cloudWrap")[1];
};

window.addEventListener(
  "scroll",
  function (e) {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    // console.log(per);

    bar.style.height = per + "%";

    cloudWrap.style.transform = "translate(0," + scrollTop / 1.2 + "px)";
    cloudWrap2.style.transform = "translate(0," + -scrollTop / 1.4 + "px)";
  },
  false
);
