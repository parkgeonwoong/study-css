let scrollTop = 0;

window.addEventListener(
  "scroll",
  function (e) {
    scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
  },
  false
);
