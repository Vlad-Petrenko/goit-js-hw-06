const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const typeValue = document.querySelector("#value");

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

btnDecrement.addEventListener("click", () => {
  counterValue.decrement();
  typeValue.textContent = counterValue.value;
});
btnIncrement.addEventListener("click", () => {
  counterValue.increment();
  typeValue.textContent = counterValue.value;
});
