import { useState } from "react"

const Form = ({ setName, setEmail, setPhoneNum, name, email, phoneNum }) => {
  const [validName, setValidName] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [validNum, setValidNum] = useState(true)

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  return (
    <div className="wr">
      <form className="box">
        <h4>Personal info</h4>
        <p>Please provide your name, email address, and phone number.</p>
        <label
          className={`input-box ${
            validName ? "after:opacity-0" : "after:opacity-100"
          }`}
        >
          <span>Name</span>
          <input
            className={
              validName ? "border-light-gray" : "border-strawberry-red"
            }
            type="text"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={e => {
              setName(isFinite(e.target.value.at(-1)) ? name : e.target.value)

              if (e.target.value) setValidName(true)
              else setValidName(false)
            }}
            maxLength={30}
          />
        </label>
        <label
          className={`input-box ${
            validEmail ? "after:opacity-0" : "after:opacity-100"
          }`}
        >
          <span>Email Address</span>
          <input
            className={
              validEmail ? "border-light-gray" : "border-strawberry-red"
            }
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={e => {
              setEmail(e.target.value)

              if (regEx.test(e.target.value)) setValidEmail(true)
              else setValidEmail(false)
            }}
          />
        </label>
        <label
          className={`input-box ${
            validNum ? "after:opacity-0" : "after:opacity-100"
          }`}
        >
          <span>Phone Number</span>
          <input
            className={validNum ? "border-light-gray" : "border-strawberry-red"}
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={phoneNum}
            onChange={e => {
              setPhoneNum(isFinite(e.target.value) ? e.target.value : phoneNum)

              if (+e.target.value.length > 5) setValidNum(true)
              else setValidNum(false)
            }}
            maxLength={25}
          />
        </label>
      </form>
    </div>
  )
}

export default Form
