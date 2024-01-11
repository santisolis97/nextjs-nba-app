import Pagination from '../../../../components/Pagination/Pagination';
import { getPlayers } from '@/app/api/requests';
import { PlayerCard } from '../PlayerCard/PlayerCard';
import { Player } from '@/app/types/players';

export const PlayerGrid = async ({
  searchParams,
}: {
  searchParams?: { page: string; query: string };
}) => {
  const { page, query } = searchParams || {
    page: '0',
    query: '',
  };

  const players = await getPlayers(page, query);
  return (
    <div>
      <div className='flex flex-wrap gap-6 justify-center items-center pb-4'>
        {players.data.data.map((player: Player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
      <Pagination totalPages={players.data.meta.total_pages} />
    </div>
  );
};
