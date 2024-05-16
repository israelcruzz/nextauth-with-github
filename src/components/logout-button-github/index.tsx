"use client";

import { signOut } from "next-auth/react";

export const LogoutButtonGithub = () => {
  return (
    <button
      className="mt-8 px-4 py-3 xl:px-6 xl:py-5 gap-6 bg-[#1E1E1E] text-white flex items-center justify-center rounded-lg text-xs xl:text-2xl hover:bg-[#1e1e1eee]"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};
