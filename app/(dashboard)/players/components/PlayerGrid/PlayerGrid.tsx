import Pagination from "../../../../../components/ui/Pagination/Pagination";
import { getPlayers } from "@/api/requests";
import { PlayerCard } from "../PlayerCard/PlayerCard";
import { Player } from "@/types/players";

export const PlayerGrid = async ({
  searchParams,
}: {
  searchParams?: { page: string; query: string };
}) => {
  const { page, query } = searchParams || {
    page: "0",
    query: "",
  };

  const players = await getPlayers(page, query);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-6 pb-4">
        {players.data.data.map((player: Player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
      <Pagination totalPages={players.data.meta.total_pages} />
    </div>
  );
};
