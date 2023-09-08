import Button from "./Button"
const Thanks = ({ setCurStep, email, curStep }) => {
  const handleBack = () => {
    setCurStep(c => c - 1)
  }
  return (
    <div
      className={`px-7 flex flex-col items-start justify-center h-screen md:h-fit md:w-96 transition duration-700 ${
        curStep === 2
          ? "opacity-100 visible pointer-events-auto relative"
          : "opacity-0 invisible pointer-events-none absolute"
      }`}
    >
      <img src="icon-success.svg" alt="icon-success" className="mb-7" />
      <h2 className="heading">Thanks for subscribing!</h2>
      <p className="text-charcoal-grey">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <Button type="button" handleStep={handleBack}>
        Dismiss message
      </Button>
    </div>
  )
}

export default Thanks
