import { Game } from '@/app/types/games';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export const GameCard = ({
  date,
  home_team,
  home_team_score,
  period,
  status,
  visitor_team,
  visitor_team_score,
}: Game) => {
  const isHomeTeamWinner = home_team_score > visitor_team_score;
  const isVisitorTeamWinner = visitor_team_score > home_team_score;
  return (
    <div className=' hover:scale-105 transition-transform justify-between max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6  h-96 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col '>
      <div className='flex justify-between mb-4'>
        <div className={`text-lg font-semibold max-w-[90%]`}>
          <span
            className={`${
              isHomeTeamWinner ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {home_team.full_name}
          </span>{' '}
          @{' '}
          <span
            className={`${
              isVisitorTeamWinner ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {visitor_team.full_name}
          </span>
        </div>
        <div className='text-gray-500'>{status}</div>
      </div>

      <div className='mb-4'>
        <div className='text-sm text-gray-500'>Date</div>
        <div className='text-lg'>{new Date(date).toLocaleDateString()}</div>
      </div>

      <div className='mb-4'>
        <div className='text-sm text-gray-500'>Score</div>
        <div className='text-lg'>
          {home_team.full_name} {home_team_score} - {visitor_team_score}{' '}
          {visitor_team.full_name}
        </div>
      </div>

      <div className='mb-4'>
        <div className='text-sm text-gray-500'>Period</div>
        <div className='text-lg'>{period}</div>
      </div>

      {/* Add more details as needed */}

      <div className='flex justify-center '>
        <Image
          src='/nba-logo.webp'
          alt='NBA Logo'
          width='0'
          height='0'
          sizes='100vw'
          className='w-[96px] h-[54px]'
        />
      </div>
    </div>
  );
};
