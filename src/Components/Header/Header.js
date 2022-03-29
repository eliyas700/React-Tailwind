import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const headerItems = [
    { id: 1, name: "Home", url: "/home" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Sell", url: "/sell" },
    { id: 4, name: "Contct Us", url: "/contact" },
    { id: 5, name: "Cart", url: "/cart" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? (
          <XIcon className="w-6 h-6"></XIcon>
        ) : (
          <MenuAlt1Icon className="w-6 h-6"></MenuAlt1Icon>
        )}
      </div>
      <ul
        className={`md:flex justify-center mt-5 bg-purple-400 py-5 font-serif absolute duration-500 ease-in ${
          open ? "top-6" : "top-[-220px]"
        }`}
      >
        {headerItems.map((item) => (
          <li className="mr-20">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
