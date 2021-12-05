let dropdown = document.querySelector(".dropdown");

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

/*
display none이 transition이 안되는 이유

https://velog.io/@dev-tinkerbell/display-none%EC%9D%B4-transition%EC%9D%B4-%EC%95%88%EB%A8%B9%ED%9E%88%EB%8A%94-%EC%9D%B4%EC%9C%A0
*/
