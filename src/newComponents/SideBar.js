import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { deleteNote, getconfigAction } from "../redux/actions";
import date from "date-and-time";
import React, { useEffect } from "react";

const Sidebar = ({
  notes,
  remove,
  filterednotes,
  setFilteredNotes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  getNoteData,
  isLoading
}) => {

  const now = new Date();

  useEffect(() => {
    getNoteData();
  }, []);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>
          {!isLoading ? (
            <>
              <span className="highlight">Notes</span>
            </>
          ) : (
            "loading..."
          )}
        </h1>
        {/* adding new empty note */}
        <AddIcon className="app-sidebar-header-add" onClick={onAddNote} />
      </div>

      <div className="app-sidebar-notes">
        {/* map note id to side bar */}
        {notes.map((note) => (
          <div
            key={note.noteId}
            className={`app-sidebar-note ${note.noteId === activeNote.noteId && "active"
              }`}
            onClick={() => setActiveNote(note)}
          >
            <DeleteIcon
              className="sidebar-note-delete"
              onClick={() => remove(note.noteId)}
            />
            <div className="sidebar-note-title">
              <strong>{note.noteHeader}</strong>
            </div>
            <small className="note-meta">
              {date.format(now, 'YYYY/MM/DD  HH:mm:ss')}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    Main_Header: state.configValuesReducer.configResponse?.Main_Header,
    isLoading: state.configValuesReducer.isLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getNoteData: (Main_Header) => {
      dispatch(getconfigAction(Main_Header, () => {
        console.log("action works!");
      }));
    },
    remove: (noteId) => dispatch(deleteNote(noteId, () => {
      console.log("Note deleted!");
    })),

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);