// store your data, state is a data changing in your app
import { createStore } from "redux";

const plus = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

//reducer is a function that will modify your data.

//magical redux!!

const countModifier = (state = 0) => {
  //initialize state=0
  return state;
};

const countStore = createStore(countModifier);

// we get functions like {dispatch, subscribe, getState, replaceReducer ...}
console.log(countStore);
// console.log(countStore.getState());
