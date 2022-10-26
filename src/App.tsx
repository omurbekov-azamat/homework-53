import React, {useState} from 'react';
import TaskForm from "./TaskForm/TaskForm";
import Task from "./Task/Task"

function App() {
  const [tasks, setTasks] = useState([
    {task: 'buy milk', id: 'd123'},
    {task: 'walk with dog', id: 'd442'},
    {task: 'do homework', id: 'asd'},
  ]);


  const [showTasks, setShowTasks] = useState(false)

  const toggleTasks = () => {
      setShowTasks(!showTasks);
  };

  let tasksList: React.ReactNode = null;

  if (showTasks) {
    tasksList = (
      <div>
        <Task task={tasks[0].task}/>
        <Task task={tasks[1].task}/>
        <Task task={tasks[2].task}/>
      </div>
    );
  }

  return (
    <>
      <TaskForm onHeaderClick={(e) => {
        e.preventDefault();
        toggleTasks()
      }}/>
      {tasksList}
    </>
  );
}

export default App;
