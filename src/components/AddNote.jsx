import React from "react";

function AddNote({ newNote, onInputChange, onAddNote }) {
    const { title, body } = newNote;
    return (
        <div className="note-input">
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={onInputChange}
            />
            <textarea
                name="body"
                placeholder="Note"
                value={body}
                onChange={onInputChange}
            />
            <button onClick={onAddNote}>Add Note</button>
        </div>
    )
}

export default AddNote;