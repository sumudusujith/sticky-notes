import { connect } from "react-redux";
import { useState,  } from "react";
import { addNote, updateNote, } from "../redux/actions";


const Main = ({ activeNote, onUpdateNote, setActiveNote, edit, noteId }) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function updateNote() {
    console.log("ADD");
    edit(activeNote.noteId, noteHeader, noteValue);
    setNoteHeader("");
    setNoteValue("");
    setActiveNote(false);
  }
  function clearNote() {
    setNoteHeader("");
    setNoteValue("");
  }
  // const onEditField = (key, value) => {
  //   onUpdateNote({
  //     ...activeNote,
  //     [key]: value,
  //     lastModified: Date.now(),
  //   });
  // };

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
        //autoFocus
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
    // Main_Header: state.configValuesReducer.configResponse?.Main_Header,
    //isLoading: state.configValuesReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addNewNote: (noteId, noteHeader, noteValue) => {
    //   dispatch(addNote(noteId, noteHeader, noteValue));
    // },
        edit: (noteId, noteHeader, noteValue) =>
      dispatch(updateNote(noteId, noteHeader, noteValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);