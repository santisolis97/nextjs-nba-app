import React from 'react';
import { OptionType } from '../../../../components/MultiSelect/MultiSelect';
import { getTeams } from '@/app/api/requests';
import { TeamSelect } from './TeamSelect';

export const GamesFilter = async () => {
  const teams = await getTeams();
  const teamsOptions = teams.data.data.map((team) => ({
    label: team.full_name,
    value: team.id.toString(),
  }));

  return (
    <div className='flex w-1/2 items-center justify-end gap-3'>
      <div>Filter by team:</div>
      <div className='w-3/4'>
        <TeamSelect teamsOptions={teamsOptions} />
      </div>
    </div>
  );
};
