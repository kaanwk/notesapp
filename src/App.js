import NotesList from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note", 
      date: "15/04/2024"
    },
    {
      id: nanoid(),
      text: "This is my second note", 
      date: "20/04/2024"
    },
    {
      id: nanoid(),
      text: "This is my third note", 
      date: "25/04/2024"
    },
    {
      id: nanoid(),
      text: "This is my fourth note", 
      date: "22/05/2024"
    },
  ]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;