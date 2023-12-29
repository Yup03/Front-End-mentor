import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import NavBtn from "./NavBtn";

import Avatar from "./Avatar";

const Header = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white py-3 md:py-0 px-7 flex items-center gap-5 md:mb-24 md:shadow-md max-w-7xl mx-auto">
      <NavBtn isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Logo />
      <Nav isNavOpen={isNavOpen} />
      <div className="inline-flex ml-auto gap-5 relative">
        {children}
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
