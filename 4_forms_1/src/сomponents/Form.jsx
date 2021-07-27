import React, { useState } from 'react';
const style = {
  background: "grey",
};

const INIT_FORM = { value: '#', rgb: '', error: false };

function hex2rgb(c) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`
    : null;
}


export default function Form() {

  const [form, setForm] = useState(INIT_FORM);


  const handleSubmit = (e) => {
    e.preventDefault();
    const rgb = hex2rgb(form.value);
    if (rgb) {
      setForm((prev) => ({ ...prev, rgb: rgb, error: false }))
    } else {
      setForm((prev) => ({ ...prev, rgb: "Ошибка", value: '#', error: true }))
    }
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, value: e.target.value }))
  }
  const backgroundColor = form.error ? 'red' :  form.rgb;
  return (
    <div className="App-header" style={{ ...style, backgroundColor }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="7"
          onChange={handleChange}
          value={form.value}
        />
        <button className="rgbButton">

          {form.rgb}

        </button>


      </form>
    </div>
  );
}
