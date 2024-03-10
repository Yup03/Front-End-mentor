const Nav = ({ setCurStep, curStep, handleValidation, valid }) => {
  return (
    <nav className="fixed md:absolute bottom-0 bg-white w-full flex items-center px-4 md:px-10 py-5 font-medium">
      {curStep > 1 && (
        <button
          className="text-cool-gray"
          onClick={() => {
            setCurStep(s => s - 1)
          }}
        >
          Go Back
        </button>
      )}

      {curStep < 4 ? (
        <button
          className={`text-magnolia bg-marine-blue px-4 py-2 rounded-md ml-auto transition-opacity duration-500 ${
            valid
              ? "opacity-100 cursor-pointer"
              : "opacity-70 cursor-not-allowed"
          }`}
          onClick={handleValidation}
        >
          Next Step
        </button>
      ) : (
        <button
          className="text-magnolia bg-purplish-blue px-4 py-2 rounded-md ml-auto"
          onClick={() => setCurStep(5)}
        >
          Confirm
        </button>
      )}
    </nav>
  )
}

export default Nav
