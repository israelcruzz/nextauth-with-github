import { LoginButtonGithub } from "@/components/login-button-github";
import { Metadata } from "next";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { nextAuthConfig } from "@/lib/next-auth-option/next-auth-option";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Home() {
  const session = await getServerSession(nextAuthConfig);

  if (session) {
    console.log(session);

    redirect("/info");
  }

  return (
    <main className="realative flex w-full min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="/github-lines.svg"
        alt=""
        width={390}
        height={390}
        quality={100}
        className="absolute hidden xl:bottom-0 xl:left-0"
      />

      <div className="w-full flex flex-col gap-6 items-center justify-between">
        <h1 className="text-[#1E1E1E] font-normal text-5xl xl:text-8xl text-center">
          Desbloqueie o poder da{"\n"}
          <span className="font-medium">Análise do GitHub</span>
        </h1>

        <p className="text-[#5A5A5A] text-base xl:text-xl text-center font-light">
          Eleve o desenvolvimento de software com análises automáticas do
          GitHub, revelando métricas e KPIs inestimáveis para aprimorar a
          entrega e a qualidade do software.
        </p>
      </div>

      <LoginButtonGithub />
    </main>
  );
}
