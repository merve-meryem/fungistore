import { useCart } from "../context/CartContext";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const totalPrice = cart
    .reduce((total, item) => total + Number(item.price), 0)
    .toFixed(2);

  const handleSubmit = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { fromCart: true } });
      return;
    }

    if (cart.length > 0) {
      navigate("/success");
      clearCart();
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-4xl text-lime-500 p-5">Siparişlerim:</h2>
      <div className="border h-70 border-amber-400">
        {cart.length === 0 && (
          <p className="flex flex-row text-xl p-5 text-red-500 justify-center">
            Sepetiniz Boş!!
          </p>
        )}

        {cart.map((item) => (
          <div className="p-3 text-amber-600" key={item.id}>
            <span>
              {item.title} - {item.price} ₺
            </span>

            <button
              className="p-1 rounded text-black bg-red-400"
              onClick={() => removeFromCart(item.id)}
            >
              Sil
            </button>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl text-lime-500">Notlar</p>
        <textarea
          type="text"
          className="row-3 w-full h-20 border border-amber-500"
        ></textarea>
      </div>
      <div className="p-5 text-3xl text-amber-600 flex flex-row justify-between">
        <p>Toplam: {totalPrice} TL </p>
        <button
          onClick={handleSubmit}
          disabled={cart.length === 0}
          className="border text-xl bg-lime-500 p-1 disabled:bg-gray-400"
        >
          Onayla
        </button>
      </div>
    </div>
  );
};

export default Cart;
