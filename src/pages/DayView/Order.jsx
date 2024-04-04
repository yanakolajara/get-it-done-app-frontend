import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import "./styles/Order.scss";
import OrderForm from "./OrderForm";

export default function Order(props) {
  const renderFunc = props.children || props.render;
  // const { arrayOfTasks, fetchData } = props;
  const [showForm, setShowForm] = useState(false);
  // const [hideCreateTaskForm, setHideCreateTaskForm] = useState("hide-form");

  // const displayTasks = () => {
  //   return arrayOfTasks.map((task) => {
  //     return <OrderTask props={{ task, fetchData }} />;
  //   });
  // };
  useEffect(() => {
    props.isLoading && setShowForm(false);
  }, [props.isLoading]);

  return (
    <div className="container-glass orderTaskContainer">
      {props.isLoading && props.onLoading()}
      {!props.isLoading && (
        <React.Fragment>
          <h1>Task order</h1>
          <button className="btn-create" onClick={() => setShowForm(!showForm)}>
            Create
          </button>
          {showForm && props.showForm()}
          {props.listOfTasks.map(renderFunc)}
        </React.Fragment>
      )}
    </div>
  );
}
