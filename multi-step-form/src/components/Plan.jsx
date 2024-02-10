import { useState } from "react"
import PlanCard from "./PlanCard"
import ToggleSwitch from "./ToggleSwitch"

const Plan = ({ checked, setChecked, plans, setChosenPlan, chosenPlan }) => {
  const [selected, setSelected] = useState(null)
  return (
    <div className="wr">
      <div className="box">
        <h4>Select your plan</h4>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="card-box md:flex md:space-y-0 md:justify-between">
          {plans.map((p, idx) => (
            <PlanCard
              plan={p}
              key={p.label}
              checked={checked}
              setChosenPlan={setChosenPlan}
              chosenPlan={chosenPlan}
              idx={idx}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <ToggleSwitch setChecked={setChecked} checked={checked} />
      </div>
    </div>
  )
}

export default Plan
