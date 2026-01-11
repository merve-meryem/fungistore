import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navlink({ link }) {
  const location = useLocation();
  const isActive = location.pathname === link.url;

  return (
    <Link
      to={link.url}
      className={`rounded p-1 text-[18px] sm:text-2xl ${
        isActive
          ? "bg-lime-400 text-yellow-600"
          : "text-lime-400 hover:text-yellow-500"
      }`}
    >
      {link.title}
    </Link>
  );
}

export default Navlink;
