// import React, { useEffect, useState } from "react";
// import { createChildTask, getChildTaskFromTaskId } from "../../../api/api";

// function useChildTask() {
//   const [listOfChildTasks, setListOfChildTasks] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   const handleCreateTask = async (task_id, body) => {
//     try {
//       const response = await createChildTask(task_id, body);
//     } catch (error) {
//       return error.data;
//     }
//   };

//   const handleGetTasks = async (childTaskId) => {
//     try {
//       const listOfChildTasks = (await getChildTaskFromTaskId(childTaskId)).data;
//       return listOfChildTasks;
//     } catch (error) {
//       console.error({ error: error.message });
//     }
//   };

//   const handleEditTask = async (task_id, body) => {
//     try {
//     } catch (error) {
//       return error.data;
//     }
//   };

//   const handleDeleteTasks = async (task_id) => {
//     try {
//     } catch (error) {
//       return error.data;
//     }
//   };

//   return {
//     handleCreateTask,
//     handleGetTasks,
//     handleEditTask,
//     handleDeleteTasks,
//   };
// }

// export default useChildTask;
