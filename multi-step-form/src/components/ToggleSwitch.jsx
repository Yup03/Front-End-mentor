const ToggleSwitch = ({ setChecked, checked }) => {
  const handleCheckbox = () => {
    setChecked(c => !c)
    // setChecked(e.target.checked)
  }

  return (
    <div className="flex items-center bg-alabaster justify-center py-4 gap-5 font-medium">
      <span className={checked ? "text-cool-gray" : "text-marine-blue"}>
        Monthly
      </span>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleCheckbox} />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-marine-blue  rounded-full">
          <span
            className={`block absolute h-[15px] w-[15px] left-[4px] bottom-[4px] bg-white transition-transform rounded-full duration-500 ${
              checked ? "translate-x-5" : "translate-x-0"
            }`}
          ></span>
        </span>
      </label>
      <span className={checked ? "text-marine-blue" : "text-cool-gray"}>
        Yearly
      </span>
    </div>
  )
}

export default ToggleSwitch
