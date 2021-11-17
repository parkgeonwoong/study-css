const onload = () => {
  setTimeout("goUrl()", 10000);
};

const goUrl = () => {
  location.href = "../loading/index.html";
};

onload();
