import { useEffect, useState } from "react"

const AddOnsCard = ({ addOn, checked, setChosenAdds, chosenAdds }) => {
  const [cardCheck, setCardCheck] = useState(false)

  const { label, description, month, year } = addOn

  const handleCheck = () => {
    setCardCheck(c => !c)
    console.log(year)
  }

  useEffect(() => {
    if (cardCheck) {
      setChosenAdds(
        [...chosenAdds, { label, price: checked ? year : month }].reduce(
          (accumulator, current) => {
            if (!accumulator.find(item => item.label === current.label)) {
              accumulator.push(current)
            }
            return accumulator
          },
          []
        )
      )
    } else {
      setChosenAdds(c => c.filter(add => add.label !== label))
    }
  }, [cardCheck])

  return (
    <label
      className={`flex gap-3 border  cursor-pointer rounded-lg px-3 py-5 items-center hover:border-purplish-blue transition-colors ${
        cardCheck ? "border-purplish-blue" : "border-light-gray"
      }`}
      tabIndex={1}
    >
      {/* CheckBox */}
      <div>
        <div className="contain">
          <input type="checkbox" checked={cardCheck} onChange={handleCheck} />
          <span className="checkmark"></span>
        </div>
      </div>

      <div className="ml-2">
        <h5>{label}</h5>
        <p className="text-cool-gray">{description}</p>
      </div>
      <span className="ml-auto text-purplish-blue">
        {checked ? `+$${year}/yr` : `+$${month}/mo`}
      </span>
    </label>
  )
}

export default AddOnsCard
