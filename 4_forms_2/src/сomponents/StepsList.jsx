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
          <div className="Row" key={step._id}>
            <div>{step.date.toLocaleString("ru", options)}</div>
            <div>{step.distance}</div>
            <div>
               <span onClick={() => onDel(step._id)}>✖</span>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}
