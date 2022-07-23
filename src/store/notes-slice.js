import { createSlice } from "@reduxjs/toolkit";

const initialNotesState = {
  notes: [],
};
const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotesState,
  reducers: {
    addNote(state, action) {
      state.notes.push({ id: Date.now(), text: action.payload });
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote(state, action) {
      const noteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes[noteIndex] = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;
export const selectNotes = (state) => state.notes.notes;
export default notesSlice.reducer;
