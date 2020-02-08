import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  // use Hooks
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

//mapStateToProps ==> Home Components (same store.getState() in redux)
function mapStateToProps(state) {
  return { toDos: state };
}
//mapDispatchToProps ==> Home Components (same store.dispatch() in redux)
function mapDispatchToProps(dispatch) {
  return {
    //new function, required (text) argument, execute call dispatch with the actionCreators...
    addToDo: text => dispatch(actionCreators.addToDo(text))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
