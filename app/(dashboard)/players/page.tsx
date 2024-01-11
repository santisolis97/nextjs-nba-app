import { Suspense } from 'react';
import { PlayerGrid } from './components/PlayerGrid/PlayerGrid';
import { PlayerGridSkeleton } from './components/PlayerGrid/PlayerGridSkeleton';
import { Search } from '@/app/components/Search/Search';

const Page = async ({
  searchParams,
}: {
  searchParams?: { page: string; query: string };
}) => {
  return (
    <div>
      <div className='pb-4 flex justify-end'>
        <Search placeholder='Insert player name' />
      </div>
      <Suspense
        key={searchParams?.query ?? '' + searchParams?.page ?? ''}
        fallback={<PlayerGridSkeleton />}
      >
        <PlayerGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Page;
