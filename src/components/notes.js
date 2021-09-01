import React, { useState }  from "react";
import { Box, Button } from "rebass";
//import { Input } from "@rebass/forms";
//import { RebassHeading } from "./RebassHeading";

//function
export default function AddNoteForm(props) {
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

    function handleSubmit(e) {
        e.preventDefault();
        props.addNote(form);
        setForm({ title: "", text: "" });
    }
    return (
        <form onSubmit={handleSubmit}>
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
                <button className="success">Add Note + </button>
            </div>
        </form>
    );
};
