import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask=({modal,toggle,save})=>{
  const[taskName,setTaskName]= useState('');

  const [description,setdescription]= useState(' ');
  const handleChange=(e)=>{

const {name,value}=e.target;
if(name==="taskname")
{
  setTaskName(value)
}
else{
  setdescription(value);
}
  }
  const handlesave=()=>{
    let taskobject={}
    taskobject["Name"]=taskName
    taskobject["Description"]=description
    save(taskobject);
  }
    return(
        <div>
<Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group mt-3'>
                        <label>Enter Task Name*:</label>
                        <input type='text' className=' form-control' value={taskName} name="taskname" onChange={handleChange} ></input>
            </div>
            <div className='form-group mt-3'>
            <label>Enter Description*:</label>
                     
                <textarea  rows="5" cols={"50"} className=' form-control' value={description} name='description' onChange={handleChange}></textarea>
            </div>
          </form>
          </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handlesave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default CreateTask;