import { GitItem } from "@/components/git-item";
import { LogoutButtonGithub } from "@/components/logout-button-github";
import { nextAuthConfig } from "@/lib/next-auth-option/next-auth-option";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Infos",
  };

export default async function Profile() {
  const session = await getServerSession(nextAuthConfig);

  if (!session) {
    redirect("/");
  }

  const countGitsRepo =
    session.user.githubProfile.public_repos +
    (session.user.githubProfile.total_private_repos ?? 0);
  const urlRepos = session.user.githubProfile.repos_url;

  const gistCount =
    session.user.githubProfile.public_gists +
    (session.user.githubProfile.private_gists ?? 0);
  const gistUrl = session.user.githubProfile.gists_url;

  const followersCount = session.user.githubProfile.followers;
  const followersUrl = session.user.githubProfile.followers_url;

  return (
    <main className="w-full min-h-screen flex flex-col  items-center gap-6 p-12">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={session.user?.githubProfile.avatar_url ?? "/default-avatar.svg"}
          alt=""
          quality={100}
          width={108}
          height={108}
          className="rounded-full"
        />

        <h1 className="text-[#1E1E1E] text-6xl font-normal mt-4">
          Boas vindas,
          <span className="font-bold"> {session.user?.name}</span>
        </h1>

        <p className="font-light text-3xl text-[#5A5A5A] mt-4">
          Que tal analisarmos seu GitHub?
        </p>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2">
        <section className="w-full flex flex-col">
          <GitItem
            title="Meus Repositórios"
            count={countGitsRepo}
            url={urlRepos}
          />
          <GitItem title="Meus Gists" count={gistCount} url={gistUrl} />
          <GitItem
            title="Meus Seguidores"
            count={followersCount}
            url={followersUrl}
          />

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
