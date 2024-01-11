import { GameGrid } from '@/app/(dashboard)/games/components/GameGrid/GameGrid';
import { GameGridSkeleton } from '@/app/(dashboard)/games/components/GameGrid/GameGridSkeleton';
import { Suspense } from 'react';
import { GamesFilter } from './components/GamesFilter/GamesFilter';

const Page = async ({
  searchParams,
}: {
  searchParams?: { page: string; selectedTeams: string };
}) => {
  return (
    <div>
      <div className='pb-4 flex justify-end'>
        <GamesFilter />
      </div>
      <Suspense
        key={searchParams?.selectedTeams ?? '' + searchParams?.page ?? ''}
        fallback={<GameGridSkeleton />}
      >
        <GameGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Page;
