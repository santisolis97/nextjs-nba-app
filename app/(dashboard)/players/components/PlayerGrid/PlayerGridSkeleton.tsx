import { PlayerCardSkeleton } from '../PlayerCard/PlayerCardSkeleton';

const skeletonArray = Array.from({ length: 12 }, (_, index) => index);

export const PlayerGridSkeleton = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-2 justify-center items-center pb-4'>
        {skeletonArray.map((num) => (
          <PlayerCardSkeleton key={num} />
        ))}
      </div>
    </div>
  );
};
