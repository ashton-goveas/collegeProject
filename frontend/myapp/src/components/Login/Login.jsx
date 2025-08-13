import React, { useState } from "react";
import logo from "./logo.png"; // Ensure the path is correct

export default function GlowCodeLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1e1e1e] rounded-2xl shadow-2xl p-8 border border-yellow-500">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Glow-Code Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
          {isLogin ? "Login to Glow-Code" : "Register on Glow-Code"}
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 text-sm focus:outline-none hover:text-yellow-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-right text-sm">
              <button className="text-yellow-400 hover:underline">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded-lg transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle Login/Register */}
        <div className="mt-6 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 font-medium hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
