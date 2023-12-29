const Button = ({ children, handleStep, type }) => {
  return (
    <button
      className="w-full mt-5 bg-dark-slate-grey text-white font-bold rounded-md py-3 hover:bg-gradient-to-r hover:from-rose hover:to-tomato transition duration-500s"
      type={type}
      onClick={handleStep}
    >
      {children}
    </button>
  )
}

export default Button
