import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative h-[100vh] w-full">
          <Image
            priority
            alt="NBA Game"
            className="absolute inset-0 h-full w-full object-cover"
            height="1080"
            src="https://cdn.nba.com/manage/2023/02/IMG_9200-1568x882.jpg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width="1920"
          />
          <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-black/70" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Experience the Thrill of NBA
            </h1>
            <p className="mt-4 pb-8 text-lg md:text-xl">
              Join the ultimate NBA fan community and get access to exclusive
              content, stats, and more.
            </p>
            <div className="flex w-[100%] flex-col gap-2 md:w-[20%]">
              <Link className="w-full p-0" href="/login">
                <Button className="w-full">
                  <div className="flex items-center gap-2">Log In</div>
                </Button>
              </Link>
              <Link className="w-full p-0" href="/signup">
                <Button className="w-full">
                  <div className="flex items-center gap-2">Sign Up</div>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
