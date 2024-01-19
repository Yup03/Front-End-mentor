const Final = ({ setCurStep, checked, chosenPlan, chosenAdds }) => {
  // const { label, price } = chosenPlan

  const period = checked ? "yr" : "mo"
  const total =
    chosenPlan?.price +
    chosenAdds.map(c => c.price).reduce((acc, cur) => acc + cur)

  console.log()

  return (
    <div className="wr">
      <div className="box">
        <h4>Finishing up</h4>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="bg-alabaster rounded-md p-3">
          <div className="flex justify-between items-center">
            <div>
              <span className="block font-bold text-marine-blue">
                {chosenPlan?.label} {checked ? "(Yearly)" : "(Monthly)"}
              </span>
              <button
                className="text-cool-gray underline underline-offset-2"
                onClick={() => setCurStep(2)}
              >
                Change
              </button>
            </div>
            <span className="text-m{arine-blue font-bold">
              ${chosenPlan?.price}/{period}
            </span>
          </div>
          <hr className="text-light-gray my-4" />
          <div className="space-y-3">
            {chosenAdds?.map(add => (
              <div key={add.label} className="flex justify-between">
                <span className="text-cool-gray">{add.label}</span>
                <span className="font-medium text-marine-blue">
                  +${add.price}/{period}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 flex justify-between items-center mt-5">
          <span className="text-cool-gray">
            Total (per {checked ? "year" : "month"})
          </span>
          <span className="font-bold text-purplish-blue text-lg">
            ${total}/{period}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Final
