const NavItem = ({ label }) => {
  return (
    <span className="cursor-pointer md:inline-flex md:items-center relative md:after:block md:after:absolute md:after:bottom-0 md:after:h-1 md:after:bg-orange block md:after:w-full md:after:opacity-0 hover:md:after:opacity-100 md:after:transition md:after:duration-200">
      {label}
    </span>
  )
}

export default NavItem
