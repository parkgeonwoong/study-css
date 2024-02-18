const row = document.querySelectorAll(".row");

const obj = ["fa fa-address-book-o", "fa fa-bath", "fa fa-ravelry"];
console.log(obj);
const icon = document.createElement("i");

for (const item of obj) {
  row.innerHTML += "<i></i>";
  row.classList.add("[item]");
}
