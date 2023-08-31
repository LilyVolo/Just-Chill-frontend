import React, { useState } from "react";
import service from '../service/service';


function AddNote({ handleAddNote, planId, setShouldFetch, userId }) {

  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = async (event) => {
    event.preventDefault();
    handleAddNote();
    console.log(noteText, 'text')
    try {
      const noteToAdd = {
        plan:planId,
        note: noteText,
        user: userId,
      };
      const response = await  service.post(`plans/savedplans/notes`, noteToAdd);
      console.log(response);
      setShouldFetch(true)
      setNoteText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="note-new">
      <form onSubmit={handleSaveClick}>
        <div className="textarea-notes">
          <textarea
            cols="20"
            rows="8"
            placeholder="Type to add a note.."
            value={noteText}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="note-footer">
          <small>{characterLimit - noteText.length} characters remaining </small>
          <button className="save" onClick={handleSaveClick}>
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
