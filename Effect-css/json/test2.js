const name1 = document.querySelector(".name");

function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

//아이템 동적으로 받아오기
loadItems().then((items) => {
  console.log(items);
  const json = JSON.stringify(items);
  name1.textContent = json;
});
