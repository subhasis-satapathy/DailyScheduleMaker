import React, { useState } from 'react';

export const AddSch = ({ addSch }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Schedule Title or Description can't be blank");
        }
        else {
            addSch(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Upcoming Events/Tasks</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Schedule Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Schedule Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Schedule</button>
            </form>
        </div>
    )
}
