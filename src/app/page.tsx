import { LoginButtonGithub } from "@/components/login-button-github";
import Image from "next/image";

export default function Home() {
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
