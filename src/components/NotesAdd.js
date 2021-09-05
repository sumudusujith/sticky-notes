import React, { useState } from "react";
import { Box, Button, Flex } from "rebass";
import { Input, Textarea } from "@rebass/forms";
import { connect } from "react-redux";

import { RebassLabel } from "./RebassLabel";
import { addNote } from "../redux/actions";

const NotesAdd = (props) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");

  function addClicked(e) {
   
  }

  function clearClicked() { //
    
  }

  return (
    <Flex

      alignItems='center'
      pt='2rem'
      flexDirection='column'
    >
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
          bg: 'white',
        }}

      >
        <RebassLabel value="Title" fontFamily="Candara" textAlign="left" marginBottom={[2, 3, 3]} />
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


        <RebassLabel value="Note" fontFamily="Candara" textAlign="left" marginBottom={[2, 3, 3]} />
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
          bg='#24a0ed'

        >
          Clear
        </Button>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesAdd);