import React from 'react';
import Image from 'next/image';
import { Team } from '@/app/types/teams';

type PlayerCardProps = {
  id: number;
  first_name: string;
  height_feet: number | null;
  height_inches: number | null;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds: number | null;
};

export const PlayerCard = ({
  id,
  first_name,
  height_feet,
  height_inches,
  last_name,
  position,
  team,
  weight_pounds,
}: PlayerCardProps) => {
  return (
    <div className='hover:scale-105 transition-transform justify-between max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 h-96 sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col '>
      <div className='flex justify-between mb-4'>
        <div className='text-2xl font-semibold max-w-[90%]'>
          <span className='text-green-400'>
            {first_name} {last_name}
          </span>
        </div>
        <div className='text-gray-500'>{position}</div>
      </div>

      <div className='mb-4'>
        <div className='text-sm text-gray-500'>Team</div>
        <div className='text-lg'>{team.full_name}</div>
      </div>

      <div className='mb-4'>
        <div className='text-sm text-gray-500'>Height</div>
        <div className='text-lg'>
          {height_feet && height_inches
            ? `${height_feet}' ${height_inches}"`
            : 'N/A'}
        </div>
      </div>

      <div className='mb-4'>
        <div className='text-sm text-gray-500'>Weight</div>
        <div className='text-lg'>
          {weight_pounds ? `${weight_pounds} lbs` : 'N/A'}
        </div>
      </div>

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
