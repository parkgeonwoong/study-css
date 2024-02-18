const onload = () => {
  setTimeout("goUrl()", 15000);
};

const goUrl = () => {
  location.href = "../loading/index.html";
};

onload();
