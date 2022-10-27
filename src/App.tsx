import React, {useState} from 'react';
import TaskForm from "./TaskForm/TaskForm";
import Task from "./Task/Task"

interface TaskProps {
  task: string,
  id: number,
  key: number,
}
let getTask: TaskProps;

function App() {
  const [tasks, setTasks] = useState([
    {task: 'buy milk', id: Math.floor(Math.random() * 12345)},
    {task: 'walk with dog', id: Math.floor(Math.random() * 12345)},
    {task: 'do homework', id: Math.floor(Math.random() * 12345)},
  ]);

  const newTask = (event: React.ChangeEvent<HTMLInputElement>) => {

    getTask = {
      task: event.target.value,
      id: Math.floor(Math.random() * 12345),
      key: Math.floor(Math.random() * 54321),
    };
  };

  const sendTask = () => {
    const tasksCopy = [...tasks];
    tasksCopy.push(getTask);
    setTasks(tasksCopy);
  };



  const deleteTask = (id:number) => {
    const taskCopy = [...tasks];
    taskCopy.splice(id,1);
    setTasks(taskCopy);
    console.log(tasks)
  }

  const showTasks = () =>{
    const tasksItems = tasks.map((task) =>
      <Task
        task={task.task}
        key={task.id}
        delete={() => deleteTask(task.id)}/>
    )
    return (
      <>{tasksItems}</>
    )
  };

  return (
    <>
      <TaskForm onGetNewTask={newTask} onHeaderClick={(event) => {event.preventDefault(); sendTask();}}/>
      {showTasks()}
    </>
  );
}

export default App;
