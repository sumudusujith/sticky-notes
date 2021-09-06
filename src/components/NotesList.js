import React from "react";
import { connect } from "react-redux";
import NoteOption from "./noteOption";



function NoteList(props) {
  return (
    <div >
      {props.notes.map((note) => (
        <NoteOption key={note.noteId} noteId={note.noteId} noteHeader={note.noteHeader} noteValue={note.noteValue}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
  };
}

export default connect(mapStateToProps)(NoteList);
