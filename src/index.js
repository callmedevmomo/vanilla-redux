// store your data, state is a data changing in your app
import { createStore } from "redux";

const plus = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

//reducer is a function that will modify your data.

//magical redux!!

// how do we modify our state ==> answer is action
const countModifier = (state = 0, action) => {
  // console.log(action)
  // has been called twice {first:initialize, second:"HELLO"}
  // redux send a message countModifier(currentModifier=0,{type:"HELLO"})
  if (action.type === "ADD") {
    console.log(state, action);
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

const countStore = createStore(countModifier);

//how do we send a action(messages) to countModifier ? :: dispatch
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
