import { useState } from "react"
import Content from "./Content"
import Form from "./Form"
import Pic from "./Pic"
import Thanks from "./Thanks"

const App = () => {
  const [curStep, setCurStep] = useState(1)
  const [email, setEmail] = useState("")

  return (
    <div className="md:flex bg-white md:w-fit md:p-10 md:rounded-3xl md:items-center md:gap-10">
      {curStep === 1 && (
        <>
          <Pic />
          <div className="pt-10 px-7 pb-7">
            <Content />
            <Form email={email} setEmail={setEmail} setCurStep={setCurStep} />
          </div>
        </>
      )}

      <Thanks setCurStep={setCurStep} email={email} curStep={curStep} />
    </div>
  )
}

export default App
