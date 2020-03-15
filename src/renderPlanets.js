import getInfo from "./getInfo";
import planetImg from "./img/planet.jpg";

async function renderPlanets(currentPage = 1) {
  const container = document.getElementById("container-planets");
  const planets = await getInfo("planets", { page: currentPage });
  container.innerHTML = "";
  planets.forEach(planet => {
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
