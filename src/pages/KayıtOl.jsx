import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function SignIn({ onSignIn }) {
  const [logged, setLogged] = useLocalStorage("user", null);
  const storedUser = localStorage.getItem("user");
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    login(JSON.stringify(getValues()));
    setLogged(data);
    reset();
    window.history.back();
  };

  return (
    <div className="text-xl flex flex-col items-center justify-center my-20">
      <h2 className="text-2xl text-lime-700">Giriş Yap</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center my-2 "
      >
        <label>Email Adresiniz:</label>
        <input
          className="border w-100 my-2"
          type="email"
          placeholder="Enter email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Şifreniz:</label>
        <input
          type="password"
          className="border w-100 my-2"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters" },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="border-none bg-amber-400 w-50"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
        <button
          type="reset"
          onClick={() => {
            reset();
            localStorage.removeItem("user");
          }}
        ></button>
      </form>
    </div>
  );
}
