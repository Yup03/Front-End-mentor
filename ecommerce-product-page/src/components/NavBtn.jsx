const NavBtn = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <button
      onClick={() => {
        setIsNavOpen(o => !o)
      }}
      className="z-[50] md:hidden md:pointer-events-none md:invisible opacity-70"
    >
      <img src={`icon-${isNavOpen ? "close" : "menu"}.svg`} alt="icon-menu" />
    </button>
  )
}

export default NavBtn
