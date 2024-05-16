import { LogoutButtonGithub } from "@/components/logout-button-github";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="w-full min-h-screen flex flex-col  items-center gap-6 p-12">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/default-avatar.svg"
          alt=""
          quality={100}
          width={108}
          height={108}
        />

        <h1 className="text-[#1E1E1E] text-6xl font-normal mt-4">
          Boas vindas,
          <span className="font-bold"> Fulano de tal</span>
        </h1>

        <p className="font-light text-3xl text-[#5A5A5A] mt-4">
          Que tal analisarmos seu GitHub?
        </p>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2">
        <section className="w-full flex flex-col">
          <Link
            href="/"
            className="flex w-full justify-between items-center py-6 border-t  border-[#BFBFBF]"
          >
            <h1 className="text-xl font-normal">Meus Repositórios (5)</h1>
            <Image
              src="/link-git.svg"
              width={24}
              height={24}
              quality={100}
              alt=""
            />
          </Link>
          <Link
            href="/"
            className="flex w-full justify-between items-center py-6 border-t  border-[#BFBFBF]"
          >
            <h1 className="text-xl font-normal">Meus Repositórios (5)</h1>
            <Image
              src="/link-git.svg"
              width={24}
              height={24}
              quality={100}
              alt=""
            />
          </Link>
          <Link
            href="/"
            className="flex w-full justify-between items-center py-6 border-t  border-[#BFBFBF]"
          >
            <h1 className="text-xl font-normal">Meus Repositórios (5)</h1>
            <Image
              src="/link-git.svg"
              width={24}
              height={24}
              quality={100}
              alt=""
            />
          </Link>

          <LogoutButtonGithub />
        </section>

        <section className="w-full h-full flex justify-center items-center">
          <Image
            src="/detail2.png"
            width={260}
            height={260}
            quality={100}
            alt=""
            className=""
          />
        </section>
      </div>
    </main>
  );
}
