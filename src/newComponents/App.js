import { useState } from "react";
import "./App.css";
import Main from "./Main";
import Sidebar from "./SideBar";
import { addNote } from "../redux/actions";
import { connect } from "react-redux";

// const newNote = () => {
//   return { id: uuid(), title: "", body: "", lastModified: Date.now() };
// };

const App = (props) => {
  const [activeNote, setActiveNote] = useState(false);
  // initial state is set to false. it include initial value when the component first renders.
  // Add a new note
  const onAddNote = () => {
    // update the list of notes
    props.addNewNote("", "");
    //setNotes([newNote(), ...notes]);
  };

  // const onUpdateNote = (updatedNote) => {
  //   const updatedNotesArray = notes.map((note) => {
  //     if (note.id === activeNote) {
  //       return updatedNote;
  //     }
  //     return note;
  //   });

  //   setNotes(updatedNotesArray);
  // };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      // filterednotes={filterednotes}
      //setFilteredNotes={setFilteredNotes}
      />
      <Main activeNote={activeNote} setActiveNote={setActiveNote} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noteId: state.notes.noteId,
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);