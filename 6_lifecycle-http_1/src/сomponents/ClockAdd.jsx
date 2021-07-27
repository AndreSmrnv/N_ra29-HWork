import React, { useState } from 'react';
import { INIT_FORM, GMT } from '../utils/initData';
import shortid from 'shortid';


export default function ClockAdd({ onAdd }) {

  const [form, setForm] = useState(INIT_FORM);

  const onFieldChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      _id: shortid.generate(),
      city: form.city || "Moscow",
      gmt: form.gmt
    });
    setForm(INIT_FORM);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="Container">
          <div>
            <select
              name="gmt"
              id="gmt"
              value={form.gmt}
              onChange={onFieldChange}
            >
              {
                GMT.map(gmt => (
                  <option key={gmt} value={gmt}>{gmt}</option>
                ))
              }
            </select>

          </div>
          <div>
            <label htmlFor="date">Город/Страна</label>
            <input
              onChange={onFieldChange}
              type="text"
              name="city"
              value={form.city}
            />
          </div>
          <div>
            <label htmlFor="distance">Временная зона </label>
            <input
              onChange={onFieldChange}
              type="text"
              name="gmt_txt"
              value={form.gmt}
            />
          </div>

          <button className="Btn" type="submit">
            Добавить
          </button>
        </div>
      </form>


    </>
  );
}
