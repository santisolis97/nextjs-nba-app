import { Game } from '@/app/types/games';
import { GameCard } from '../GameCard/GameCard';
import Pagination from '../../../../components/Pagination/Pagination';
import { getGames } from '@/app/api/requests';

export const GameGrid = async ({
  searchParams,
}: {
  searchParams?: { page: string; selectedTeams: string };
}) => {
  const { page, selectedTeams } = searchParams || {
    page: '0',
    selectedTeams: '',
  };
  const selectedTeamsArray = selectedTeams
    ?.split('-')
    .filter(Boolean)
    .map(Number);

  const games = await getGames(page, selectedTeamsArray);

  return (
    <div>
      <div className='flex flex-wrap gap-6 justify-center items-center pb-4'>
        {games.data.data.map((game: Game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
      <Pagination totalPages={games.data.meta.total_pages} />
    </div>
  );
};
