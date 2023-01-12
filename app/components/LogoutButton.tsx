"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  const handleLogout = () => {
    signOut();
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      onClick={handleLogout}
    >
      Sign Out
    </button>
  );
}
