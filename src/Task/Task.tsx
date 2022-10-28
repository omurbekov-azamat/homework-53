import React from "react";

interface TaskProps {
  task: string,
  id: number,
  delete: React.MouseEventHandler,
}


const Task: React.FC<TaskProps> = (props) => {
  return(
    <div className='container d-flex justify-content-between align-items-center border border-danger p-3 mb-3'>
      <p className='m-0'>{props.task}</p>
      <button onClick={props.delete} className='btn btn-danger'>delete</button>
    </div>
  )
}

export default Task;