import { connect } from "react-redux";
import { useState, } from "react";
import { updateNote, } from "../redux/actions";


const Main = ({ activeNote, onUpdateNote, setActiveNote, edit, noteId }) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function updateNote() {
    console.log("NOTE added");
    edit(activeNote.noteId, noteHeader, noteValue);
    setNoteHeader("");
    setNoteValue("");
    setActiveNote(false);
  }
  function clearNote() {
    console.log("Values cleared");
    setNoteHeader("");
    setNoteValue("");
  }


  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;
  return (

    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={noteHeader}
          onChange={(e) => setNoteHeader(e.target.value)}

        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />
        <button onClick={updateNote} className="update-note-button">
          <span>Update </span>
        </button>
        <button onClick={clearNote} className="clear-note-button">
          <span>Clear </span>
        </button>
      </div>
      <div className="note-saved-values">
        <h3>Title</h3>
        {activeNote.noteHeader}
        <br />
        <h3>Note</h3>
        {activeNote.noteValue}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noteId: state.notes.noteId,
    notes: state.notes,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    edit: (noteId, noteHeader, noteValue) =>
      dispatch(updateNote(noteId, noteHeader, noteValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);