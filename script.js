const people = JSON.parse(localStorage.getItem("selectedPeople")) || [];

function getRandomPerson() {
  const unusedPeople = data.filter(person => !people.includes(person.id));
  if (unusedPeople.length === 0) {
    document.getElementById("spinButton").disabled = true;
    alert("Все люди были выбраны. Перезагрузка для нового списка!");
    return null;
  }
  const randomIndex = Math.floor(Math.random() * unusedPeople.length);
  const selectedPerson = unusedPeople.splice(randomIndex, 1)[0];
  people.push(selectedPerson.id);

  localStorage.setItem("selectedPeople", JSON.stringify(people));
  return selectedPerson;
}

document.getElementById("spinButton")?.addEventListener("click", () => {
  const person = getRandomPerson();
  if (person) {
    document.getElementById("personName").textContent = person.name;
    document.getElementById("wishes").textContent = person.wishes;
  }
});

// Food page
const form = document.getElementById("dishesForm");
const saveButton = document.getElementById("saveDishes");

const dishes = JSON.parse(localStorage.getItem("dishes")) || {};

data.forEach(person => {
  const listItem = document.createElement("li");
  const input = document.createElement("input");
  input.placeholder = `Введите блюдо для ${person.name}`;
  input.value = dishes[person.id] || "";
  input.addEventListener("input", () => {
    dishes[person.id] = input.value;
  });
  listItem.appendChild(input);
  form.appendChild(listItem);
});

saveButton?.addEventListener("click", () => {
  localStorage.setItem("dishes", JSON.stringify(dishes));
  alert("Блюда сохранены!");
});