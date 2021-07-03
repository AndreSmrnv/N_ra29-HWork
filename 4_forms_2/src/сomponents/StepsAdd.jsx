import React, { useState } from 'react';
import { INIT_FORM } from '../utils/initData';

export default function StepsAdd({ onAdd }) {

  let [form, setForm] = useState(INIT_FORM);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      date: form.date ? new Date(form.date) : new Date(),
      distance: isFinite(form.distance) ? +form.distance : 0
    });
    setForm(INIT_FORM);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Container">
          <div>
            <label htmlFor="date">Дата</label>
            <input
              onChange={handleChange}
              type="date"
              name="date"
              id=""
              value={form.date}
            />
          </div>
          <div>
            <label htmlFor="distance">Пройдено, км</label>
            <input
              onChange={handleChange}
              type="text"
              name="distance"
              id=""
              value={form.distance}
            />
          </div>
          <button className="Btn" type="submit">
            OK
          </button>
        </div>
      </form>


    </>
  );
}
