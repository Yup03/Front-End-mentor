const BtnOrder = ({ handleClick, children }) => {
  return (
    <button
      className="w-full py-2 font-semibold bg-red text-rose-50 rounded-full"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
export default BtnOrder
