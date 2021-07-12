import React, { useState, useEffect } from "react";
import NotesAdd from "./NotesAdd";
import NotesItem from "./NotesItem";
import { INIT_DATA } from '../utils/initData';




export default function Notes() {
  const [notes, setNotes] = useState(INIT_DATA);
  //const [notes, setNotes] = useState(INIT_DATA);
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    await fetch(`${process.env.REACT_APP_URL}/notes`)
      .then((response) => response.json())
      .then((result) => {
        setNotes([...result]);
      });
  }
  const addNoteRequest = async (content = 'test') => {
    console.log("fetch post");
    return await fetch(`${process.env.REACT_APP_URL}/notes`, {
      method: 'POST',
      body: content 
    })
      ;
  };
  const delNoteRequest = async (id) => {
    console.log("fetch delete");
    return await fetch(`${process.env.REACT_APP_URL}/notes/${id}`, {
      method: 'DELETE',
      body: id,
    })

      ;
  };

  const addNote = (form) => {
    addNoteRequest(form.textArea)
      .then(() => getData());

  }
  const delClock = (id) => {
    delNoteRequest(id)
      .then(() => getData());
  }
  console.log(notes);

  return (
    <>


      <div className="Update">
        <h2>Notes</h2>
        <button onClick={getData}>⭮</button>
      </div>


      <div className="Notes">
        {notes && notes.map((note) => (
          note.content && <NotesItem note={note} key={note.id} onDel={delClock} />
        ))}
      </div>
      <NotesAdd onAdd={addNote} />






    </>
  );
}
