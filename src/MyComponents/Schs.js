import React from 'react'
import {SchItem} from "./SchItem";

export const Schs = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto",
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Events/Tasks List</h3>
            {props.schs.length===0? "No Schedules to display":  
            props.schs.map((sch)=>{
                console.log(sch.sno);
                return (<SchItem sch={sch} key={sch.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}