import React from 'react';
import Note from './Note';

function ListNote({ notes, onDelete}) {
  return (
    <div className="notes-list">
        {notes.length === 0 ? (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
        notes.map((note) => (
            <Note key={note.id} note={note} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}

export default ListNote;
