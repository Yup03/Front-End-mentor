const SwitchBtn = ({ imgSrc, position, handleSwitch, styleSwitchBtns }) => {
  return (
    <button
      className={`absolute top-1/2 md:top-[40%] -translate-y-full bg-white w-10 h-10 rounded-full inline-flex items-center justify-center z-10 ${position} ${styleSwitchBtns}`}
      onClick={handleSwitch}
    >
      <img
        src={imgSrc}
        alt="icon"
        className="transition duration-300 hover:invert-[62%] hover:sepia-[22%] hover:saturate-[6654%] hover:hue-rotate-[347deg] hover:brightness-[101%] hover:contrast-[101%]"
      />
    </button>
  )
}

export default SwitchBtn
