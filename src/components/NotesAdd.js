import React, { useState, useEffect } from "react";
import { Box, Button, Flex } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

import { RebassLabel } from "./RebassLabel";

import { addNote, getconfigAction } from "../redux/actions";
//import { selectMainHeader, selectNoteHeader, reselectMain_Header, reselectisLoading } from "../redux/selectors/noteSelectors";
import NoteList from "./NotesList";
import { RebassHeading } from "./RebassHeading";


const NotesAdd = (props) => {
  const { getNoteData, isLoading } = props;
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");



  useEffect(() => {
    getNoteData();
  }, []);

  function addClicked(e) {
    e.preventDefault();
    if (noteHeader === "" || noteValue === "") {
      alert("empty fields");
    } else {
      props.addNewNote(noteHeader, noteValue);
    }

  }

  function clearClicked() { //

    setNoteHeader("");
    setNoteValue("");
  }


  return (

    <Flex

      //alignItems='center'
      //flexDirection='column'
     // backgroundColor='#e4edf7'
      sx={{
        flexWrap: 'wrap'
      }}

    >
      <Box
    sx={{
      p: 3,
      flexGrow: 1,
      flexBasis: 256
    }}>
      <Box>
        {!isLoading ? (
          <>
            <RebassHeading
              color={"#24a0ed"}
              fontFamily={"Candara"}
              value={"Add your Notes"}
              marginBottom={[2, 3, 4]}
              fontSize={[5, 6, 7]}

            />
          </>
        ) : (
          "loading..."
        )}
     

        <Box
          textAlign={"center"}
          sx={{
            px: 7,
            py: 2,
            backgroundColor: "white",
            backgroundSize: 'cover',
            border: '5px solid', borderColor: "darkblue",
            borderRadius: 18,
            color: 'black',
            bg: '#e4edf7',
            marginBottom: "11px"
          }}

        >
          <RebassLabel value="Title" fontWeight="bold" fontFamily="Candara" textAlign="left" marginBottom={[2, 3, 3]} />
          <label value={props.noteId} />

          <Input
            sx={{

              border: '5px solid', borderColor: "#4997d0",
              borderRadius: 18,
              marginBottom: 3,
              marginTop: 2,
            }}
            value={noteHeader}
            onChange={(e) => setNoteHeader(e.target.value)}
          />


          <RebassLabel value="Note" fontWeight="bold" fontFamily="Candara" textAlign="left" marginBottom={[2, 3, 3]} />
          <Textarea
            sx={{
              height: "110px",
              width: "400px",
              border: '5px solid', borderColor: "#4997d0",
              borderRadius: 18,
            }}
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)}
          ></Textarea>


          <br />

          <Button
            onClick={addClicked}
            width='100px'
            height='34px'
            bg='#282c34'
          >
            Add
          </Button>

          <br />
          <br />

          <Button
            onClick={clearClicked}
            width='90px'
            height='34px'
            boxShadow='card'
            borderRadius="2"
            bg='#56a0d3'

          >
            Clear
          </Button>
        </Box>
        </Box>
        <Box
    sx={{
      p: 3,
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: 320
    }}>
        <NoteList />
        </Box>
      </Box>

    </Flex>


  );
};

const mapStateToProps = (state) => {
  return {
    Main_Header: state.configValuesReducer.configResponse?.Main_Header,
    isLoading: state.configValuesReducer.isLoading,
    noteId: state.notes.noteId,
    notes: state.notes,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    getNoteData: (Main_Header) => {
      dispatch(getconfigAction(Main_Header, () => {
        console.log("action works!");
      }));
    },
    addNewNote: (noteId, noteHeader, noteValue) => {
      dispatch(addNote(noteId, noteHeader, noteValue));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesAdd);