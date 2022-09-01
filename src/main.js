import schema from "./schema.json" assert { type: "json" };

const app = document.querySelector("#app");

app.innerHTML = `<h1>${schema.name}</h1>`;
