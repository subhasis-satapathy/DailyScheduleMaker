import React from 'react'

export const SchItem = ({sch, onDelete}) => {
    return (
        <>
        <div>
           <h4>{sch.title}</h4>
           <p>{sch.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(sch)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
