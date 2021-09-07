import React, { useState } from "react";
import { Box, Button } from "rebass";
import { Input } from "@rebass/forms";
import { connect } from "react-redux";
import { deleteNote, updateNote } from "../redux/actions";
import "./styles.css";

const NoteOption = (props) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");
  return (
    <div >
      {/* <Box
        sx={{
          height: "200px",
          width: "480px",
          backgroundColor: "#accae8",
          backgroundSize: 'cover',
          border: '3px solid', borderColor: "#356285",
          borderRadius: 12,
          color: 'black',
          margin: "9px"
        }}
      > */}
      <div className="app-sidebar-notes">
      <div className="app-sidebar-note ">
      <div className="sidebar-note-title">
        <Input
          // sx={{
          //   border: '2px solid', borderColor: "#4997d0",
          //   borderRadius: 10,
          //   margin: "6px",
          //   height: "30px",
          //   width: "450px",
          //   bg: 'white',
          // }}
          placeholder={props.noteHeader}
          value={noteHeader}
          onChange={(e) => setNoteHeader(e.target.value)}
        />
        </div>
        <br />
        <Input
          // sx={{
          //   marginLeft: "5px",
          //   height: "70px",
          //   width: "450px",
          //   border: '2px solid', borderColor: "#4997d0",
          //   borderRadius: 10,
          //   bg: 'white',
          // }}
          placeholder={props.noteValue}
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />

        <Box
         
         >

          <Button
            width='50px'
            height='27px'
            bg='#58c1a3'
            margin="2"
            textAlign='left'
            onClick={() => props.edit(props.noteId, noteHeader, noteValue)}
          >
            E
          </Button>

          <Button
            width='50px'
            height='27px'
            bg='#ab274f'
            onClick={() => props.remove(props.noteId)}
          >
            X
          </Button>
        </Box>
      {/* </Box> */}
      </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    remove: (noteId) => dispatch(deleteNote(noteId)),
    edit: (noteId, noteHeader, noteValue) =>
      dispatch(updateNote(noteId, noteHeader, noteValue)),
  };
}

export default connect(null, mapDispatchToProps)(NoteOption);
