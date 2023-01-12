"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full h-full grid place-content-center">
      <div className="flex items-center gap-2 pt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          enableBackground="new 0 0 32 32"
          overflow="visible"
          viewBox="0 0 32 32"
        >
          <g>
            <g>
              <circle cx="16" cy="16" r="16" fill="rgb(248 113 113)"></circle>
              <path
                fill="#E6E6E6"
                d="M14.5 25h3v-3h-3v3zm0-19v13h3V6h-3z"
              ></path>
            </g>
          </g>
        </svg>
        <p className="text-red-400 font-bold text-lg">Error on load messages</p>
      </div>
    </div>
  );
}
