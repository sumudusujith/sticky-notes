import React, { useState } from "react";
import { Box, Button } from "rebass";


//function
export const NoteForm = (props) => {
    const [form, setForm] = useState({
        title: "",
        text: ""
      });
    
      function handleChange(e) {
        const { name, value } = e.target;
    
        let newForm = { ...form };
        newForm[name] = value;
    
        setForm(newForm);
      }
    
  

    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        configLogin,
        login_SubHeader,
        login_Header,
        isLoading,
        isError,
        //form
    } = props;


        
    // }
    return (
        //<form onSubmit={handleSubmit}>
        <Box>
            <h4>Add a Note</h4>
            <div>
                <label>Title</label>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Text</label>
                <textarea
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Add Note</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Delete
                </button>
            </div>
            </Box>
       // </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
        
//     };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//           }
        
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
