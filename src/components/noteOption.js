import React, { useState } from "react";
import { Box, Button, Flex } from "rebass";
import { Input } from "@rebass/forms";
import { connect } from "react-redux";


const NoteOption = (props) => {
  const [noteHeader, setNoteHeader] = useState("");
  const [noteValue, setNoteValue] = useState("");
  return (
    <div >
      <Box
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
      >
        <Input
          sx={{
            border: '2px solid', borderColor: "#4997d0",
            borderRadius: 10,
            margin: "6px",
            height: "30px",
            width: "450px",
            bg: 'white',
          }}
          placeholder={props.noteHeader}
          value={noteHeader}
          onChange={(e) => setNoteHeader(e.target.value)}
        />
        <br />
        <Input
          sx={{
            marginLeft: "5px",
            height: "70px",
            width: "450px",
            border: '2px solid', borderColor: "#4997d0",
            borderRadius: 10,
            bg: 'white',
          }}
          placeholder={props.noteValue}
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />
   
        <Box
          sx={{
            marginBottom: 7,
          }}>

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
      </Box>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(null, mapDispatchToProps)(NoteOption);

//  import React, { useState } from "react";
//  import { Box, Button, Flex } from "rebass";
//  import { Input, Textarea, Label } from "@rebass/forms"
// import { Input, Textarea } from "redux-form";

//  import { compose } from 'redux';
//  import { connect } from "react-redux";
//  import { addNote } from "../redux/actions/noteAction";
//  import { RebassHeading } from "./RebassHeading";
//  import { RebassLabel } from "./RebassLabel";





//  function NoteForm(props) {
//     const [form, setForm] = useState({
//          title: "",         text: ""
//     });     
//     const [title, setTitle] = useState("");

//      function handleChange(e) {
//                 const { name, value } = e.target;

//         let newForm = { ...form };
//          newForm[name] = value;

//          setForm(newForm);
//      }

//      function handleSubmit(e) {
//          e.preventDefault();
//          props.addNote(form);
//          setForm({ title: "", text: "" });
//      }


//      return (
//          <form onSubmit={handleSubmit}>
//              <Flex
//                  backgroundColor='#282c34'
//                 height='100vh'
//                 alignItems='center'
//                 pt='2rem'
//                 flexDirection='column'
//             >
//                 <RebassHeading
//                     name={"Notes App"}

//                     fontSize="4rem"
//                     textAlign="center"
//                     color= "#FFFFFF"
//                     fontFamily="Candara"
//                     mb='2rem'
//                 />

//                 <Box>
//                     <div>
//                         <Label
//                             fontSize={[2, 3, 4]}
//                             marginBottom={[1, 2, 3]}
//                             name={"Title"}
//                         //htmlFor="userName"
//                         />
//                         <Input
//                             sx={{
//                                 borderWidth: "1px",
//                                 borderStyle: "solid",
//                                 borderColor: "black",
//                                 marginBottom: 3,
//                                 marginTop: 2,
//                             }}
//                             name="title"
//                             value={form.title}
//                             onChange={handleChange}
//                             required
//                         //onChange={(e) => setTitle(e.target.value)}
//                         />
//                         <Textarea
//                             name="text"
//                             value={form.text}
//                             onChange={handleChange}
//                             required
//                         // onChange={(e) => setNoteValue(e.target.value)}
//                         ></Textarea>
//                         <br />
//                     </div>
//                     <Button
//                         sx={{
//                             fontSize: 1,
//                             background: "black",
//                             margin: 1,
//                         }}
//                     >
//                         Add Note
//                     </Button>
//                     {/* <Button
//         sx={{
//           fontSize: 1,
//           background: "black",
//           margin: 1,
//         }}
//       >
//         Edit
//       </Button> */}
//                     {/* <Button
//         sx={{
//           fontSize: 1,
//           background: "black",
//           margin: 1,
//         }}
//       >
//         Delete
//       </Button> */}
//                 </Box>
//             </Flex>

//          </form>
// )
// }
//  const mapStateToProps = (state) => {
//      return {

//      };
//  };

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addNote: payload => {
//             console.log(payload);
//             dispatch(addNote(payload));
//         }
//     }

// };
// export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);





























// // import React from "react";

// // import { connect } from "react-redux";
// // import { deleteNote } from "../redux/actions/noteAction";
// // import notes from "./notes";
// // import { noteList } from "./notesList";




// // function noteOption(props) {
// //   return (
// //     <div class="note">
// //       <h4>{props.title}</h4>
// //       <p>{props.text}</p>

// //       <button class="delete" onClick={() => props.remove(props.id)} />
// //     </div>
// //   );
// // }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     remove: id => dispatch(deleteNote(id))
// //   };
// // }

// // export default connect(
// //   null,
// //   mapDispatchToProps
// // )(noteOption);

// // function noteTake(props) {
// //   return (
// //     <div className="note-list">
// //       {props.notes.map(note => (
// //         <noteList key={note.id} text={note.text} title={note.title} id={note.id} />
// //       ))}
// //     </div>
// //   );
// // }

// // function mapStateToProps(state) {
// //   return {
// //     notes: state
// //   };
// // }

// // export default connect(mapStateToProps)(noteTake);
