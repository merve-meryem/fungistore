import React from "react";
import images from "../images/images.jpeg";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import Navlink from "./NavLink";
import { NavLink, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import mushroomdata from "../../mushroomdata";
import Products from "./Products";
import { useAuth } from "../context/AuthContext";

const links = [
  { url: "/", title: "Anasayfa" },
  { url: "/hakkımızda", title: "Hakkımızda" },
  { url: "/siparis", title: "Sipariş Ver" },
  { url: "/cart", title: "Sepet" },
];

function Header() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-green-50 z-10 shadow-lg">
      <div className="flex flex-row justify-between items-center p-4">
        <img
          onClick={() => navigate("/")}
          src={images}
          className="w-10 h-10 sm:w-20 sm:h-20 cursor-pointer"
        />
        <h1
          onClick={() => navigate("/")}
          className="text-xl sm:text-3xl font-bold cursor-pointer text-lime-500"
        >
          🍄 Fungi Store
        </h1>

        <div className="flex flex-row items-center text-xs sm:text-xl">
          {user?.email ? (
            <div className="">
              <p className="text-lime-500">Hoşgeldiniz</p>
              <button
                className="cursor-pointer  text-lime-500 "
                onClick={handleLogout}
              >
                Çıkış Yap
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer font-semibold text-lime-500 "
            >
              Giriş Yap
            </button>
          )}

          <div>
            <button
              onClick={() => navigate("/cart")}
              className="ml-2 bg-yellow-200 text-green-700 rounded-full p-1 text-md"
            >
              🛒 {cart.length}
            </button>
          </div>
        </div>
      </div>
      <div className="text-xl">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
    </div>
  );
}

export default Header;
