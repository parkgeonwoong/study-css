let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.querySelectorAll(".progress__bar")[0];
};

window.addEventListener(
  "scroll",
  function (e) {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    console.log(per);

    bar.style.width = per + "%";
  },
  false
);
