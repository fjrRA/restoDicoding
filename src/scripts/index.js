import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "../styles/responsive.scss";

// import home from "../component/home.js";

import restoData from "../public/data/DATA.json";

document.addEventListener("DOMContentLoaded", () => {
  const restoItem = restoData["restaurants"];
  let restoList = "";
  restoItem.forEach(function (data) {
    restoList += `
    <!-- Ini nanti isi dari resto-item nya. -->
    <div class="card" tabindex="0">
      <div class="label__place" tabindex="0"> ${data["city"]} </div>
      <div class="gambarcontent">
        <img src="${data["pictureId"]}" alt="${data["name"]}" title="${
      data["name"]
    }" />
      </div>
      <div class="content"> 
        <h3>Rating
            <a href="#" tabindex="0"> ${data["rating"]}</a>
            </h3>
        <h2 tabindex="0">${data["name"]}</h2>
        <p tabindex="0">${data["description"].slice(0, 150)}...<p>
      </div>
    </div>
    `;
  });

  document.querySelector(".card__list").innerHTML = restoList;

  const menu = document.querySelector("#menu");
  const hero = document.querySelector(".hero");
  const main = document.querySelector("main");
  const drawer = document.querySelector("#drawer");

  menu.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation();
  });

  hero.addEventListener("click", function () {
    drawer.classList.remove("open");
  });

  main.addEventListener("click", function () {
    drawer.classList.remove("open");
  });
});

console.log("Hello Coders! :)");
