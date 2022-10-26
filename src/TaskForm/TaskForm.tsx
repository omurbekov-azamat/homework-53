import React from "react";

const TaskForm = () => {
  return (
    <div className='bg-light p-3 mb-3'>
      <form>
        <div className='container d-flex'>
          <input type="text" className='form-control' placeholder='Add new task'/>
          <button className='btn btn-success ms-4'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm;