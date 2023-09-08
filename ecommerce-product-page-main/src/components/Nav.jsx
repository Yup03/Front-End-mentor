import NavItem from "./NavItem"

const Nav = ({ isNavOpen }) => {
  return (
    <nav
      className={`flex flex-col md:flex-row gap-7 bg-white fixed md:relative left-0 top-0 h-screen md:h-16 w-3/4 md:w-fit pt-24 md:pt-0 font-bold md:font-normal text-xl md:text-base pl-7 md:pl-0 transition duration-500 z-30 ${
        isNavOpen
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0"
      }`}
    >
      <NavItem label="Collections" />
      <NavItem label="Men" />
      <NavItem label="Women" />
      <NavItem label="About" />
      <NavItem label="Contact" />
    </nav>
  )
}

export default Nav
