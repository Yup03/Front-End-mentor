const StepCircle = ({ num, curStep }) => {
  return (
    <li className="md:flex md:items-center md:space-x-3">
      <span
        className={`border-2 inline-flex items-center justify-center w-9 h-9 rounded-full border-magnolia text-magnolia font-medium ${
          curStep === num ? "bg-light-blue" : ""
        }`}
      >
        {num}
      </span>

      <div className="hidden md:block">
        <span className="md:block text-cool-gray text-xs">STEP {num}</span>
        <span className="font-bold text-white text-sm ">
          {num === 1 && "YOU INFO"}
          {num === 2 && "SELECT PLAN"}
          {num === 3 && "ADD-ONS"}
          {num === 4 && "SUMMARY"}
        </span>
      </div>
    </li>
  )
}

export default StepCircle
