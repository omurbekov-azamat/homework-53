import React, {useState} from 'react';
import TaskForm from "./TaskForm/TaskForm";
import Task from "./Task/Task"

interface TaskProps {
  task: string,
  id: string,
}

let getTask: TaskProps;

function App() {
  const [tasks, setTasks] = useState([
    {task: 'buy milk', id: Math.random().toString(36)},
    {task: 'walk with dog', id: Math.random().toString(36)},
    {task: 'do homework', id: Math.random().toString(36)},
  ]);


  const newTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    getTask = {
      task: event.target.value,
      id: Math.random().toString(36),
    };
  };

  const sendTask = () => {
    const tasksCopy = [...tasks];
    tasksCopy.push(getTask);
    setTasks(tasksCopy);
  };

  const deleteTask = (id:string) => {
    const index = tasks.findIndex(p => p.id === id);
    const taskCopy = [...tasks];
    taskCopy.splice(index, 1);
    setTasks(taskCopy);
  };

  const showTasks = () =>{
    const tasksItems = tasks.map((task) =>
      <Task
        task={task.task}
        id={task.id}
        key={task.id}
        delete={() => deleteTask(task.id)}/>
    )
    return (
      <>{tasksItems}</>
    )
  };

  return (
    <>
      <TaskForm
        onGetNewTask={newTask}
        onHeaderClick={(event) => {
          event.preventDefault();
          sendTask();
        }}/>
      {showTasks()}
    </>
  );
}

export default App;
