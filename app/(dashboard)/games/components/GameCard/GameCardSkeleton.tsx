import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const GameCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor='#a6a5a5' highlightColor='#6e6e6e'>
      <div className='z-0 justify-between w-[100%] rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 h-96 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col '>
        <div className='flex justify-between mb-4'>
          <div className={`text-lg font-semibold max-w-[90%]`}>
            <span className='skeleton-text'>
              <Skeleton width={100} />
            </span>{' '}
            <span className='skeleton-text'>
              <Skeleton width={100} />
            </span>
          </div>
          <div className='text-gray-500'>
            <span className='skeleton-text'>
              <Skeleton width={50} />
            </span>
          </div>
        </div>

        <div className='mb-4'>
          <div className='text-sm text-gray-500'>
            <span className='skeleton-text'>
              <Skeleton width={50} />
            </span>
          </div>
          <div className='text-lg'>
            <span className='skeleton-text'>
              <Skeleton width={100} />
            </span>
          </div>
        </div>

        <div className='mb-4'>
          <div className='text-sm text-gray-500'>
            <span className='skeleton-text'>
              <Skeleton width={50} />
            </span>
          </div>
          <div className='text-lg'>
            <span className='skeleton-text'>
              <Skeleton width={100} />
            </span>
          </div>
        </div>

        <div className='mb-4'>
          <div className='text-sm text-gray-500'>
            <span className='skeleton-text'>
              <Skeleton width={50} />
            </span>
          </div>
          <div className='text-lg'>
            <span className='skeleton-text'>
              <Skeleton width={100} />
            </span>
          </div>
        </div>

        <div className='flex justify-center '>
          <span className='skeleton-text'>
            <Skeleton width={64} height={36} />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
};
