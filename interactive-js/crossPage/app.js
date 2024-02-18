let totalNum = 0;
let pageNum = 0;

const contentWrap = document.querySelectorAll(".contentWrap");
const button = document.querySelectorAll("button");
const title = document.querySelectorAll("h1");
const imgArr = document.querySelectorAll("img");

totalNum = contentWrap.length;

const pageSet = () => {
  // 전체 리셋
  for (let i = 0; i < contentWrap.length; i++) {
    contentWrap[i].classList.remove("active");
  }

  // 내부 이미지 리셋
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].classList.remove("active");
  }

  // 선택 컨텐츠랩 활성
  contentWrap[pageNum].classList.add("active");

  for (let i = 0; i < 4; i++) {
    contentWrap[pageNum].getElementsByTagName("img")[i].classList.add("active");
  }

  title[0].innerText = `PAGE : ${pageNum + 1}`;
};

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

pageSet();

button[0].addEventListener("click", handlePrev);
button[1].addEventListener("click", handleNext);
