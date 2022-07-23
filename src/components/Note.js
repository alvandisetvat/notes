import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../store/notes-slice";
import NoteForm from "./NoteForm";
const Note = ({ note }) => {
  const [showEditor, setShowEditor] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteNote(note.id));
    console.log("dele", note.id);
  };
  const editHandler = () => {
    setShowEditor(true);
  };
  const applyHandler = () => {
    setShowEditor(false);
  };
  return (
    <li>
      <div className="note-item">
        <div className="note-text">
          <p>{note.text} </p>
        </div>
        {!showEditor && (
          <div class="note-actions">
            <button onClick={editHandler} className="edit-btn">
              Edit
            </button>
            <button onClick={deleteHandler} className="delete-btn">
              Delete
            </button>
          </div>
        )}
      </div>

      {showEditor && <NoteForm onApply={applyHandler} note={note}></NoteForm>}
    </li>
  );
};

export default Note;
