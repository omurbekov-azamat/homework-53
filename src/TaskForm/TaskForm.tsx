import React from "react";

interface TaskFormProps extends React.PropsWithChildren {
  onHeaderClick: React.MouseEventHandler;
}

const TaskForm: React.FC<TaskFormProps> = (props) => {
  return (
    <div className='bg-light p-3 mb-3'>
      <form>
        <div className='container d-flex'>
          <input type="text" className='form-control' placeholder='Add new task'/>
          <button onClick={props.onHeaderClick} type='submit' className='btn btn-success ms-4'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm;