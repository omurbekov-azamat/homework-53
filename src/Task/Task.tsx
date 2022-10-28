import React from "react";

interface TaskProps {
  task: string,
  id: string,
  delete: React.MouseEventHandler,
  completed: React.ChangeEventHandler<HTMLInputElement>,
  checkbox: boolean,
}


const Task: React.FC<TaskProps> = (props) => {

  return(
    <div className='container d-flex justify-content-between align-items-center border border-danger p-3 mb-3'>
        <p className='m-0'>{props.task}</p>
        <div>
          <input onChange={props.completed} type="checkbox"/>
          <button onClick={props.delete} className='btn btn-danger ms-4'>delete</button>
        </div>
    </div>
  )
}

export default Task;