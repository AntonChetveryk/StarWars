import getInfo from "./getInfo";
import avatar from "./img/avatar.jpg";

let isShowPerson = false;

async function renderPersons() {
  let container = document.getElementById("container-persons");
  const persons = await getInfo("people");

  if (!isShowPerson) {
    persons.forEach(person => {
      const div = document.createElement("div");
      div.className = "persons";
      div.innerHTML = `
        <img src=${avatar} alt="avatar" class='avatar'/>
        <p>name: ${person.name}</p>
        <p>gender: ${person.gender}</p>
        <p>birth_year: ${person.birth_year}</p>
        `;
      container.append(div);
    });
  }
  if (isShowPerson) {
    container.innerHTML = "";
  }
  isShowPerson = !isShowPerson;
}

export default renderPersons;
