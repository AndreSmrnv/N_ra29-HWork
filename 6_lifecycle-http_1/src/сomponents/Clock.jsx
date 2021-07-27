import React, { useState } from "react";
import ClockAdd from "./ClockAdd";
import ClockItem from "./ClockItem";
import { INIT_DATA } from '../utils/initData';



export default function Clock() {
  const [clocks, setClocks] = useState(INIT_DATA);
  const addClock = (form) => {
    setClocks((prev) => ([...prev, form]))
  }
  const delClock = (id) => {
    setClocks((prev) => (
      [...prev.filter((step) => step._id !== id)]
    ))

  }

  return (
    <>
      <ClockAdd onAdd={addClock} />

      <div className="Container">
        <div>Время</div>
        <div>Город</div>
        <div>Действия</div>
      </div>

      <div className="Container Data">
        {clocks.map((clock) => (
          <ClockItem key={clock._id} clock={clock} onDel={delClock} />
        ))}
      </div>
      
    </>
  );
}
