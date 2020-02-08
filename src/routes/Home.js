import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  // use Hooks
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

//mapStateToProps ==> Home Components
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
