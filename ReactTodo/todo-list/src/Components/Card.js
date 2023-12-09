import React from "react";
import '../App.css';
const Card=({taskobj,index})=>{
return(<>
<div className="card-wrapper mr-3">
    <div className="card-top" style={{"backgroundColor":"chartreuse"}}></div>
    <div className="task-holder bg-white">
        <span className="card-header" style={{"borderRadius":"10px",fontSize:"30px",padding:"20px"}}>Title*:{taskobj.Name}</span>
        <p style={{"borderRadius":"10px",fontSize:"18px",padding:"20px"}}>Description*:{taskobj.Description}</p>

        <div style={{"position":"absolute","right":"2px","bottom":"1px"}}>
            <i className="far fa-edit " style={{"color":"#5DC250","marginLeft":"-20px","padding":"10px"}}></i>
            <i className="fas fa-trash-alt" style={{"color":"#5DC250","marginRight":"-20px","padding":"20px"}}></i>
        </div>
    </div>
</div>
</>)
}
export default Card;