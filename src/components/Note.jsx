import React from 'react';
import { showFormattedDate } from '../utils/index';

function Note({ note, onDelete }) {
  return (
    <div className="note-item">
        <div className="note-item__content">
            <h2 className="note-item__title">{note.title}</h2>
            <p className="note-item__date">
            Created on {showFormattedDate(note.createdAt)}
            </p>
            <p className="note-item__body">{note.body}</p>
        </div>
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(note)}>Hapus</button>
            {/* Button Archice Belum Aktif */}
            <button className="note-item__archive-button">Archive</button> 
        </div>
    </div>
  );
}

export default Note;