import React from "react";

interface TaskProps {
  task: string;
}


const Task: React.FC<TaskProps> = (props) => {
  return(
    <div className='container d-flex justify-content-between border border-danger p-3 mb-3'>
      <p>{props.task}</p>
      <button className='btn btn-danger'>delete</button>
    </div>
  )
}

export default Task;