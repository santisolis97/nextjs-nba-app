import { GameCardSkeleton } from '../GameCard/GameCardSkeleton';

const skeletonArray = Array.from({ length: 12 }, (_, index) => index);

export const GameGridSkeleton = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-2 justify-center items-center pb-4'>
        {skeletonArray.map((num) => (
          <GameCardSkeleton key={num} />
        ))}
      </div>
    </div>
  );
};
