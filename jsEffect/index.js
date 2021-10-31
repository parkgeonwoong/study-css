const banner = document.querySelectorAll(".banner")[0];
//const blocks = document.querySelectorAll('.blocks');
const blocks = document.getElementsByClassName("blocks");

for (let i = 1; i < 400; i++) {
  banner.innerHTML += "<div class='blocks'></div>";
  blocks[i].style.animationDelay = `${i * 0.05}s`;
}

const onload = () => {
  setTimeout("go_url()", 25000);
};

const go_url = () => {
  location.href = "main.html";
};

onload();
