import React from "react";

import ImageLıst from "../components/ImageLıst";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Anasayfa() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = () => {
    navigate("/siparis");
  };

  return (
    <>
      <div>
        <h1 className="flex flex-row justify-center items-center text-4xl font-bold mt-10 text-lime-500">
          Fungi Store'a Hoşgeldiniz...
        </h1>
        <div className="flex flex-row justify-center items-center mt-10">
          <button
            onClick={handleSubmit}
            className="border border-none text-yellow-800 bg-amber-300  rounded-2xl p-3"
          >
            Sipariş Vermek İçin Tıklayınız
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center my-20">
        <ImageLıst />
      </div>
    </>
  );
}
