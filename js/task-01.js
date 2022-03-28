const categoriesNames = document.querySelector("#categories");
const categoriesItems = categoriesNames.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

const onElItem = categoriesItems.forEach((elementItem) => {
  console.log(`Category: ${elementItem.firstElementChild.textContent}`);
  console.log(`Elements: ${elementItem.lastElementChild.children.length}`);
});
