const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createIdForArray = document.querySelector("ul#ingredients");

const list = ingredients.map((element) => {
  const listEl = document.createElement("li");
  listEl.textContent = element;
  listEl.classList.add("item");
  return listEl;
});
createIdForArray.prepend(...list);
