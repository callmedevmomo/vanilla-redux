import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  };
};
const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

// never use mutate state , return new state
// reducer get state, action && other functions communicate using action
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const addobj = { text: action.text, id: Date.now() };
      // reducer return the state of your app
      return [addobj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

// how do we send action to reducer ? ==> using dispatch
// dispatch will call the reducer with the current state, action that you sent
const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
//want to listen for changes in your store ==> can subscribe to that changes
store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
