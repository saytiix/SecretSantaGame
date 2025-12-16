const names = [
  "Евгений Небожин",
  "Влад",
  "Влад (Долгов)",
  "Рома",
  "Рома (Пичугин)",
  "Алина",
  "Даня",
  "Женя (Архипов)",
  "Даня (маленький)",
  "Саша (парень Дани)"
];

function spin() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const result = names[randomIndex];

  document.getElementById("result").textContent =
    "Тебе выпал: " + result;
}
<script src="script.js"></script>
