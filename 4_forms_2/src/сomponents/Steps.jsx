import React, { useState } from "react";
import StepsAdd from "./StepsAdd";
import StepsList from "./StepsList";
import { INIT_DATA } from '../utils/initData';



export default function Steps() {
  const [steps, setSteps] = useState(INIT_DATA);
  const addStep = (form) => {
    setSteps((prev) => ([...prev, form]))
  }
  const delStep = (index) => {
    setSteps((prev) => (
      [...prev.filter((_, indx) => indx !== index)]
    ))

  }

  return (
    <>
      <StepsAdd onAdd={addStep} />
      <StepsList steps={steps.sort((a, b) => (b.date - a.date))} onDel={delStep} />
    </>
  );
}
