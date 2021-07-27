import React from 'react';


export default function NotesItem({ note, onDel }) {

  return (
    <>
      <div className="Note">
        <p>{note.content}</p>
        <button onClick={() => onDel(note.id)} className="NoteDel" >✖</button>
      </div>
    </>
  );
}
