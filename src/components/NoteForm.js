import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, updateNote } from "../store/notes-slice";
const AddNewNote = ({ onApply = null, note = null }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    if (note) {
      setText(note.text);
    }
  }, [note]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (text.trim() === "") return;
    if (note) {
      dispatch(updateNote({ id: note.id, text: text }));
      onApply();
    } else {
      dispatch(addNote(text));
      setText("");
    }
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div class="form-row">
        <div class="text-input">
          <input
            value={text}
            autoComplete="off"
            placeholder="Add a new note ..."
            onChange={changeHandler}
            type="text"
            name="note-text"
            id="notetext"
          />
        </div>
        {!note && <button class="add-btn">+</button>}
        {note && <button class="add-btn">&#x2714;</button>}
      </div>
    </form>
  );
};

export default AddNewNote;
