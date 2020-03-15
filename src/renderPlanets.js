import getInfo from "./getInfo";
import planetImg from "./img/planet.jpg";

async function renderPlanets(currentPage) {
  const container = document.getElementById("container-planets");
  const persons = await getInfo("planets", { page: currentPage });
  container.innerHTML = "";
  persons.forEach(planet => {
    const div = document.createElement("div");
    div.className = "planets";
    div.innerHTML = `
    <img src=${planetImg} alt="avatar" class='planetImg'/>
    <p>planet: ${planet.name}<p>
    `;
    container.append(div);
  });
}

export default renderPlanets;
