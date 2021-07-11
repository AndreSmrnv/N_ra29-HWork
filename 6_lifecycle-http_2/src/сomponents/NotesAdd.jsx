import React, { useState } from 'react';
import { INIT_FORM } from '../utils/initData';



export default function NotesAdd({ onAdd }) {

  const [form, setForm] = useState(INIT_FORM);

  const onFieldChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm(INIT_FORM);
  }

  return (
    <>

      <form className="Form" onSubmit={handleSubmit}>
        <textarea value={form.textArea} name="textArea" onChange={onFieldChange} />
        <button type="submit">add</button>
      </form>

    </>
  );
}
