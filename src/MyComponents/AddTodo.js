import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container mt-3">
            <h3 style={{fontSize: '3rem', paddingBottom: "1rem" }}>Add a Todo</h3>
            <div className='formdiv'>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} autoFocus onChange={(e) => setTitle(e.target.value)} className="form-control" id="title"
                         style={{backgroundColor: "transparent",  borderWidth: "0 0 4px", color: "white"}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc"
                         style={{backgroundColor: "transparent",  borderWidth: "0 0 4px",color: "white"}}/>
                    </div>
                    <button type="submit" className="btn btn-success">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
