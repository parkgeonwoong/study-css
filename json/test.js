const param4 = {
  glossary: {
    title: "example glossary",
    GlossDiv: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossTerm: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para: "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};

console.log(param4.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para);
console.log(typeof param4.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para);
console.log(
  param4.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso[0]
);

json = JSON.stringify(param4);
console.log(json);
console.log(typeof json);

jsonObj = JSON.parse(json);
console.log(jsonObj);
console.log(typeof jsonObj);

console.clear();

const text = document.querySelector(".text");

const loaddata = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => json.title);
};

loaddata().then((item) => {
  console.log(item);
  const json = JSON.stringify(item);
  text.textContent = json;
});
// .then((ex1Str = JSON.stringify(json)));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
