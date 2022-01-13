let totalNum = 0;
let pageNum = 0;

const contentWrap = document.querySelectorAll(".contentWrap");
const button = document.querySelectorAll("button");
const title = document.querySelectorAll("h1");
const imgArr = document.querySelectorAll("img");

totalNum = contentWrap.length;

alert(imgArr.length);

const handlePrev = () => {
  if (pageNum > 0) {
    pageNum--;
  } else {
    pageNum = totalNum - 1;
  }
  console.log(pageNum);
  pageSet();
};

const handleNext = () => {
  if (pageNum < totalNum - 1) {
    pageNum++;
  } else {
    pageNum = 0;
  }
  console.log(pageNum);
  pageSet();
};

const pageSet = () => {
  title[0].innerText = `PAGE : ${pageNum + 1}`;
};

pageSet();

button[0].addEventListener("click", handlePrev);
button[1].addEventListener("click", handleNext);
