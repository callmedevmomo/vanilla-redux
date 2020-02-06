const plus = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

let count = 0;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
};
const handleMinus = () => {
  count -= 1;
  updateText();
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
