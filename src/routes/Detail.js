import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h3>Created at : {toDo?.id}</h3>
    </>
  );
}

// get id match : {params : {id}} = ownProps
function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
