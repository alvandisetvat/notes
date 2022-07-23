import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  
  return (
    <div className="app container">
       <header>
          <h1>Note App</h1>
        </header> 
     <NoteForm></NoteForm>
     <NoteList />
    </div>
  );
}

export default App;
