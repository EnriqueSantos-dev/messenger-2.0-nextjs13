"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  const handleSign = async () => {
    signIn("facebook", { callbackUrl: "/" });
  };

  return (
    <div className="w-full grid place-content-center content-center items-center gap-y-5 pt-10">
      <div className="w-56 md:w-80">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <radialGradient
            id="a"
            cx="101.9"
            cy="809"
            r="1.1"
            gradientTransform="matrix(800 0 0 -800 -81386 648000)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#09f"></stop>
            <stop offset="0.6" stopColor="#a033ff"></stop>
            <stop offset="0.9" stopColor="#ff5280"></stop>
            <stop offset="1" stopColor="#ff7061"></stop>
          </radialGradient>
          <path
            fill="url(#a)"
            d="M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.7 22.8l2.2 71.2a32 32 0 0044.9 28.3l79.4-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.8 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z"
          ></path>
          <path
            fill="#FFF"
            d="M159.8 501.5l117.5-186.4a60 60 0 0186.8-16l93.5 70.1a24 24 0 0028.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9a60 60 0 01-86.8 16l-93.5-70.1a24 24 0 00-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.2z"
          ></path>
        </svg>
      </div>

      <button
        className="bg-gradient-to-r from-[#ff5280] to-[#a033ff] text-white font-bold rounded-lg px-3 py-2"
        onClick={handleSign}
      >
        Login with facebook
      </button>
    </div>
  );
}
