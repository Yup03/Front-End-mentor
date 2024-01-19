import { useEffect, useState, useRef } from "react"

const PlanCard = ({
  plan,
  checked,
  setChosenPlan,
  idx,
  selected,
  setSelected,
}) => {
  const { label, month, year } = plan
  const isSelected = selected === idx

  const handleSelection = () => {
    setChosenPlan({ label, price: checked ? year : month })
    setSelected(idx)
  }

  return (
    <div
      className={`card items-start md:flex-col md:basis-[30%] md:gap-7 ${
        isSelected ? "border-purplish-blue" : "border-light-gray"
      }`}
      tabIndex={1}
      onClick={handleSelection}
    >
      <img
        src={`./icon-${label.toLowerCase()}.svg`}
        alt={`icon ${label.toLowerCase()}`}
      />
      <div className="inline-flex flex-col">
        <h5>{label}</h5>
        <span className="text-cool-gray ">
          {checked ? `$${year}/yr` : `$${month}/mo`}
        </span>
        {checked && (
          <span className="text-marine-blue md:text-xs">2 months free</span>
        )}
      </div>
    </div>
  )
}

export default PlanCard
