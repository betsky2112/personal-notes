import React, { useState } from 'react';
import { getInitialData } from '../utils/index';
import ListNote from './ListNote';
import HeaderNote from './HeaderNote';
import AddNote from './AddNote';

function App() {
    const [notes, setNotes] = useState(getInitialData());
    const [newNote, setNewNote] = useState({
      id: '', // Gunakan ID yang sesuai (misalnya, Math.random())
      title: '',
      body: '',
      archived: false,
      createdAt: new Date().toISOString(),
    });
    const { title, body } = newNote;
  
    // Fungsi untuk meng-handle perubahan input
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewNote({
        ...newNote,
        [name]: value,
      });
    };

  const deleteNote = (noteToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(updatedNotes);
  };

// Fungsi untuk menambahkan catatan baru
const addNote = () => {
    if (title && body) {
      // Menggunakan timestamp sebagai ID yang unik
      const timestamp = +new Date();
      const newNoteWithId = {
        ...newNote,
        id: timestamp,
      };
  
      setNotes([...notes, newNoteWithId]);
      // Reset input
      setNewNote({
        id: '', 
        title: '',
        body: '',
        archived: false,
        createdAt: new Date().toISOString(),
      });
    }
};

    return (
        <div className="App">
            <HeaderNote />
            <div className="note-app__body">
                <AddNote
                    newNote={newNote}
                    onInputChange={handleInputChange}
                    onAddNote={addNote} 
                />
                <ListNote
                    notes={notes}
                    onDelete={deleteNote}
                />
        </div>
    </div>
  );
}

export default App;
