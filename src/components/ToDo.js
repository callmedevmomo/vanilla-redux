import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps)
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
