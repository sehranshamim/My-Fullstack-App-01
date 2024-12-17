import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinksPc";
import Hamburger from "./Hamburger";
import NavLinksMobile from "./NavLinksMobile";
import NavLinksMobileClose from "./NavLinksMobileClose";
import { AnimatePresence } from "framer-motion";

function NavBar() {
  const [hambMenu, setHambMenu] = useState(false);
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="h-[74px] w-screen">
      <nav className="flex justify-between p-[15px] fixed w-screen max-h-[48px] z-[100] ">
        <Logo />
        <NavLinks />
        <Hamburger
          hambMenu={hambMenu}
          setHambMenu={setHambMenu}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <AnimatePresence>
          {hambMenu && (
            <NavLinksMobile hambMenu={hambMenu} setHambMenu={setHambMenu} />
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default NavBar;
