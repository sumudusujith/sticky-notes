import { useState } from "react";
import "./App.css";
import Main from "./Main";
import Sidebar from "./SideBar";
import { addNote } from "../redux/actions";
import { connect } from "react-redux";



const App = (props) => {
  const [activeNote, setActiveNote] = useState(false);
  // initial state is set to false. it include initial value when the component first renders.
  // Add a new note
  const onAddNote = () => {
    // update the list of notes
    props.addNewNote("", "");

  };
  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
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