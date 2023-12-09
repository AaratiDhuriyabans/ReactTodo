import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
const TodoList=()=>{
    const [modal,setModal]=useState(false);
const[tasklist,settasklist]=useState([]);
useEffect(()=>{
    let arr=localStorage.getItem("taskList");
     if(arr){
        let obj=JSON.parse(arr)
  
        settasklist(obj)
    }

},[])
    const toggle= () => {
        setModal(!modal);
    }
    const saveTask=(taskobject)=>{
        let templist=tasklist
        templist.push(taskobject)

        localStorage.setItem("TaskList",JSON.stringify(templist))
        settasklist(templist)
        setModal(false);
    }
    return(
       <>
       <div className='header text-center'>
             <h1>Todo List</h1>
             <button type='submit' className='btn btn-primary mt-2' onClick={()=>setModal(true)}>Create Task</button>
        </div>
  
       <div className='task-container'>
               {tasklist.map((obj,index)=><Card taskobj={obj} index={index}/>)}
       </div>

       <CreateTask toggle={toggle} modal={modal} save={saveTask} />
  
       </>
        );
};
export default TodoList;