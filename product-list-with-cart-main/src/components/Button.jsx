const Button = ({ children, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`text-rose-50 hover:text-red hover:bg-rose-50 border border-rose-50 rounded-full  inline-flex items-center justify-center text-lg w-5 h-5`}
      role="button"
    >
      {children}
    </div>
  )
}
export default Button
