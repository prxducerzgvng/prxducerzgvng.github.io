import schema from "../schema.json" assert { type: "json" };

const app = document.querySelector("#app");

app.innerHTML = schema.name;
