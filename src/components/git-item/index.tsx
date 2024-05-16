import Image from "next/image";
import Link from "next/link";

interface GitItemProps {
  title: string;
  count: number;
  url: string;
}

export const GitItem = ({ title, count, url }: GitItemProps) => {
  return (
    <Link
      href={url}
      className="flex w-full justify-between items-center py-6 border-t  border-[#BFBFBF]"
    >
      <h1 className="text-xl font-normal">
        {title} ({count})
      </h1>
      <Image src="/link-git.svg" width={24} height={24} quality={100} alt="" />
    </Link>
  );
};
