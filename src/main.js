import schema from "./schema.json" assert { type: "json" };

const app = document.querySelector("#app");

const main = () => {
  app.innerHTML = `<section id="about">
    <h2>About Us</h2>
    <p>A Music Group (Recording Company & Artist Collective) founded and operated in Ekurhuleni, South Africa. Home to Buddha, Siiyam, Sean808 & Soli-RSA</p>
  </section>`;
};

main();
