import React, { useEffect, useState } from "react";
import "./index.scss";

export default function Arrange(props) {
  const renderFunc = props.children || props.render;
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    props.isLoading && setShowForm(false);
  }, [props.isLoading]);

  return (
    <div className="container-glass orderTaskContainer">
      <h1>Task order</h1>
      <button className="btn-create" onClick={() => setShowForm(!showForm)}>
        Create
      </button>
      {props.showForm()}
      {props.isLoading && props.onLoading()}
      {!props.isLoading && (
        <React.Fragment>{props.listOfTasks.map(renderFunc)}</React.Fragment>
      )}
    </div>
  );
}
