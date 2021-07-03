import React from 'react'
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export default function StepsList({steps, onDel}) {
  return (
    <>
      <div className="Container">
        <div>Дата (ДД.ММ.ГГГГ)</div>
        <div>Пройдено, км</div>
        <div>Действия</div>
      </div>
      <div className="Container Data">
        {steps.map((step, index) => (
          <div className="Row" key={index}>
            <div>{step.date.toLocaleString("ru", options)}</div>
            <div>{step.distance}</div>
            <div>
               <span onClick={() => onDel(index)}>✖</span>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}
