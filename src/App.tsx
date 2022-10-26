import React from 'react';
import TaskForm from "./TaskForm/TaskForm";
import Task from "./Task/Task"

function App() {
  return (
    <>
      <TaskForm/>
      <Task task={'do your homework-53'}/>
    </>
  );
}

export default App;
