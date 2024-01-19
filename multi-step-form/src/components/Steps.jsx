import StepCircle from "./StepCircle"

const Steps = ({ curStep }) => {
  return (
    <div className="steps-box pt-6 md:p-6 bg-mobile md:bg-desktop bg-cover bg-no-repeat">
      <div className="mx-auto md:mx-0 w-fit md:w-[200px] space-x-4 md:space-x-0 md:space-y-5 flex md:flex-col">
        {Array.from({ length: 4 }, (_, i) => i + 1).map(num => (
          <StepCircle num={num} key={num} curStep={curStep} />
        ))}
      </div>
    </div>
  )
}

export default Steps
