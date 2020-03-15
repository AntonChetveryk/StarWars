import renderPersons from "./renderPersons";
import renderPlanets from "./renderPlanets";
import "./style.css";

const Buttton = document.getElementById("getPersons");
const Next = document.getElementById("next");
const Previous = document.getElementById("previous");
let currentPage = 1;

function getNextPlanets() {
  if (currentPage < 7) {
    currentPage += 1;
    renderPlanets(currentPage);
  }
}

function getPreviousPlanets() {
  if (currentPage > 1) {
    currentPage -= 1;
    renderPlanets(currentPage);
  }
}

renderPlanets(currentPage);
Buttton.addEventListener("click", renderPersons);
Next.addEventListener("click", getNextPlanets);
Previous.addEventListener("click", getPreviousPlanets);
