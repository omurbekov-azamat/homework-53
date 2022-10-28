import React, {useState} from 'react';
import TaskForm from "./TaskForm/TaskForm";
import Task from "./Task/Task"

interface TaskProps {
  task: string,
  id: string,
  checkbox: boolean,
}

let getTask: TaskProps;

function App() {
  const [tasks, setTasks] = useState([
    {task: 'buy milk', id: Math.random().toString(36), checkbox: false},
    {task: 'walk with dog', id: Math.random().toString(36), checkbox: false},
    {task: 'do homework', id: Math.random().toString(36), checkbox: false},
  ]);


  const newTask = (event: React.ChangeEvent<HTMLInputElement>) => {

    getTask = {
      task: event.target.value,
      id: Math.random().toString(36),
      checkbox: false,
    }
  };

  const sendTask = () => {
    const tasksCopy = [...tasks];
    if(getTask !== undefined) {
      tasksCopy.push(getTask);
    } else {
      alert('try again')
    }
    setTasks(tasksCopy);
  };

  const deleteTask = (id: string) => {
    const index = tasks.findIndex(p => p.id === id);
    const taskCopy = [...tasks];
    taskCopy.splice(index, 1);
    setTasks(taskCopy);
  };


  const completedTask = (event: React.ChangeEvent<HTMLInputElement>, id:string) => {
    const index = tasks.findIndex(p => p.id === id);
    const taskCopy = {...tasks[index]};

    if(taskCopy.checkbox === false) {
      taskCopy.checkbox = true;
    } else if (taskCopy.checkbox === true){
      taskCopy.checkbox = false;
    }

    tasks[index] = taskCopy;
   console.log(tasks)
  }

  const showTasks = () => {
    const tasksItems = tasks.map((task) =>
      <Task
        checkbox={task.checkbox}
        task={task.task}
        id={task.id}
        key={task.id}
        completed={event => completedTask(event, task.id)}
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
