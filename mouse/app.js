window.onload = function () {
  let h1 = document.getElementsByTagName("h1")[0];
  let cursor_item = document.querySelectorAll(".cursor_item")[0];

  window.addEventListener("mousemove", handleMouse, false);

  function handleMouse(e) {
    h1.innerHTML = "x: " + e.clientX + " y: " + e.clientY;
    cursor_item.style.transform =
      "translate(" + e.clientX + "px," + e.clientY + "px)";
    // console.log(e.clientX, e.clientY);
  }
};
