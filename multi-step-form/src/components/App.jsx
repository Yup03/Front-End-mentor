import { useEffect, useState } from "react"
import Steps from "./Steps"
import Form from "./Form"
import Plan from "./Plan"
import AddOns from "./AddOns"
import Nav from "./Nav"
import Final from "./Final"
import Thanks from "./Thanks"

const plans = [
  { label: "Arcade", month: 9, year: 90 },
  { label: "Advanced", month: 12, year: 120 },
  { label: "Pro", month: 15, year: 150 },
]
const addOns = [
  {
    label: "Online service",
    description: "Access to multiplayer games",
    month: 1,
    year: 10,
  },
  {
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    month: 2,
    year: 20,
  },
  {
    label: "Customizable Profile",
    description: "Custom theme on your profile",
    month: 2,
    year: 20,
  },
]

const App = () => {
  const [curStep, setCurStep] = useState(1)
  const [checked, setChecked] = useState(false)
  const [chosenPlan, setChosenPlan] = useState(null)
  const [chosenAdds, setChosenAdds] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [valid, setValid] = useState(false)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const handleValidation = () => {
    if (curStep === 1 && (!name || !regEx.test(email) || phoneNum.length < 5))
      setCurStep(c => c)
    else if (curStep === 2 && !chosenPlan) setCurStep(c => c)
    else if (curStep === 3 && !chosenAdds.length) setCurStep(c => c)
    else {
      console.log(curStep)
      setCurStep(c => c + 1)
    }
  }

  useEffect(() => {
    // console.log(curStep)
    if (curStep === 1 && (!name || !regEx.test(email) || phoneNum.length < 5))
      setValid(false)
    else if (curStep === 2 && !chosenPlan) setValid(false)
    else if (curStep === 3 && !chosenAdds.length) setValid(false)
    else setValid(true)
  }, [name, email, phoneNum, curStep, chosenPlan, chosenAdds])

  return (
    <div className="md:flex md:bg-white md:max-w-[800px] md:w-[800px] md:py-4 md:pl-4 md:-translate-y-[10%] rounded-xl">
      <Steps curStep={curStep} />

      <div className="md:w-full md:relative md:pt-10">
        {curStep === 1 && (
          <Form
            name={name}
            email={email}
            phoneNum={phoneNum}
            setName={setName}
            setEmail={setEmail}
            setPhoneNum={setPhoneNum}
            valid={valid}
          />
        )}

        <Plan
          curStep={curStep}
          checked={checked}
          setChecked={setChecked}
          plans={plans}
          setChosenPlan={setChosenPlan}
          chosenPlan={chosenPlan}
        />

        {curStep === 3 && (
          <AddOns
            addOns={addOns}
            checked={checked}
            setChosenAdds={setChosenAdds}
            chosenAdds={chosenAdds}
          />
        )}

        {curStep === 4 && (
          <Final
            setCurStep={setCurStep}
            checked={checked}
            chosenPlan={chosenPlan}
            chosenAdds={chosenAdds}
          />
        )}

        {curStep === 5 && <Thanks />}
        {curStep < 5 && (
          <Nav
            setCurStep={setCurStep}
            curStep={curStep}
            handleValidation={handleValidation}
            valid={valid}
          />
        )}
      </div>
    </div>
  )
}

export default App
