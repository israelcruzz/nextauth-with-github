"use client";

import Image from "next/image";
import { signIn } from 'next-auth/react'

export const LoginButtonGithub = () => {
  return (
    <button className="mt-8 px-4 py-3 xl:px-6 xl:py-5 gap-6 bg-[#1E1E1E] text-white flex items-center justify-center rounded-lg text-xs xl:text-2xl hover:bg-[#1e1e1eee]" onClick={() => signIn()}>
      <Image
        src="/github-icon.svg"
        width={38}
        height={38}
        quality={100}
        alt=""
      />
      Login com GitHub
    </button>
  );
};
