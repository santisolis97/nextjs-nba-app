import { Suspense } from "react";
import { PlayerGrid } from "./components/PlayerGrid/PlayerGrid";
import { PlayerGridSkeleton } from "./components/PlayerGrid/PlayerGridSkeleton";
import { Search } from "@/components/ui/Search/Search";

const Page = async ({
  searchParams,
}: {
  searchParams?: { page: string; query: string };
}) => {
  return (
    <div>
      <div className="flex justify-end pb-4">
        <Search placeholder="Insert player name" />
      </div>
      <Suspense
        key={searchParams?.query ?? "" + searchParams?.page ?? ""}
        fallback={<PlayerGridSkeleton />}
      >
        <PlayerGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Page;
