import Image from "next/image";
import { Link } from "../../components/ui/Link/Link";
import { FaBasketballBall } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Header } from "@/components/ui/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen md:flex">
      <aside className="flex w-full overflow-x-auto sm:w-32 sm:flex-row md:flex-col">
        <div className="flex px-2 py-8 sm:items-center md:h-full md:flex-col md:items-start md:space-y-8 dark:border-gray-700 ">
          <Link href="/" className="w-full">
            <Image
              src={"/nba-logo.webp"}
              alt="nba logo"
              priority
              width="128"
              height="32"
            />
          </Link>
          <Link href="/games" className="flex w-full items-center gap-2">
            <FaBasketballBall className="h-5 w-5" /> Games
          </Link>
          <Link href="/players" className="flex w-full items-center gap-2">
            <FaUserAlt className="h-5 w-5" />
            Players
          </Link>
          <Link href="/teams" className="flex w-full items-center gap-2">
            <RiTeamFill className="h-5 w-5" />
            Teams
          </Link>
        </div>
      </aside>
      <main className="w-full flex-1 overflow-y-hidden  sm:w-64 md:border-l md:border-r dark:border-gray-700">
        <Header />
        <div className="max-h-full overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
}
