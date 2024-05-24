import React from "react";
import { ContainerDeep } from "../../styled-components/ContainerDeep";

export default function TaskContainer({ tasks, isLoading, onLoading, render }) {
  return (
    <ContainerDeep className="top-container">
      <article className="tasks-container">
        {isLoading && onLoading()}
        {!isLoading && tasks.map(render)}
      </article>
      <button>Add Task</button>
    </ContainerDeep>
  );
}
