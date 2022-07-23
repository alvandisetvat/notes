import Note from "./Note";
import { useSelector } from "react-redux";
import { selectNotes } from "../store/notes-slice";

const NoteList = () => {
  const notes = useSelector(selectNotes);
  const sortedNotes = [...notes].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
