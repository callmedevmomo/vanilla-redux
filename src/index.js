// store your data, state is a data changing in your app
import { createStore } from "redux";

const plus = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

//magical redux!!
number.innerText = 0;

//1. modifier with current state and action
//2. action with dispatch (actions must have type && UpperCase)
//3. with subscribe we gonna execute functions when our stores changes!

const countModifier = (state = 0, action) => {
  //   console.log(state, action);
  if (action.type === "ADD") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
//countStore.subscribe() allows as to listen for changes in our stores

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
