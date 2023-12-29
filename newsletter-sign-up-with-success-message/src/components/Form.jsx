import { useState, useCallback } from "react"
import Button from "./Button"

const Form = ({ email, setEmail, setCurStep }) => {
  const [valid, setValid] = useState(true)
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const handleSubmit = e => {
    console.log(email)
    e.preventDefault()

    if (regEx.test(email)) {
      setCurStep(c => c + 1)
    } else {
      setCurStep(c => c)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={`relative block after:content-['*'] after:absolute after:top-0 after:left-24 after:block after:text-tomato after:font-bold after:text-base ${
          valid ? "after:opacity-0" : "after:opacity-100"
        }`}
      >
        <span className="block font-bold text-sm mb-2 text-charcoal-grey">
          Email address
        </span>
        <input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            setValid(regEx.test(e.target.value))
          }}
          className={`border w-full py-3 px-4 rounded-md focus:outline transition duration-300 ${
            valid
              ? "border-grey focus:outline-dark-slate-grey hover:border-dark-slate-grey"
              : "border-tomato focus:outline-tomato"
          }`}
          placeholder="email@company.com"
        />
      </label>
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  )
}

export default Form
