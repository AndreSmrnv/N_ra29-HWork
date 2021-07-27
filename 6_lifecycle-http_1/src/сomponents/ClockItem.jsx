import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function ClockItem({ clock, onDel }) {
  const { city, gmt, _id } = clock;
  const [currTime, setCurrTime] = useState(moment().utcOffset(gmt).format('HH:mm:ss'));
   
  useEffect(() => {
    const clockId = setInterval(() => {
      setCurrTime(moment().utcOffset(gmt).format('HH:mm:ss'))
    }, 1000)

    return () => {
      clearInterval(clockId);

    }
  }, [])

  return (
    <>
      <div className="Row" >
        <div>{currTime}</div>
        <div>{city}</div>
        <div>
          <span onClick={() => onDel(_id)}>✖</span>
        </div>
      </div>


    </>
  );
}
