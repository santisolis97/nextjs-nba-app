'use client';
import {
  MultiSelect,
  OptionType,
} from '@/app/components/MultiSelect/MultiSelect';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { Options } from 'react-select';

export type TeamSelectProps = {
  teamsOptions: Options<OptionType>;
};

export const TeamSelect = ({ teamsOptions }: TeamSelectProps) => {
  const { push, replace } = useRouter();
  const searchParams = useSearchParams();

  const filterArrayBySelectedIds = (
    teams: Options<OptionType>,
    selectedTeamsIds: string[]
  ) => {
    return teams.filter((item) => selectedTeamsIds.includes(item.value));
  };

  const onChange = (newValue: readonly OptionType[]) => {
    const selectedTeamValues = newValue.map((option) => option.value);

    const currentUrl = new URL(window.location.href);

    // Remove existing selectedTeams parameter
    currentUrl.searchParams.delete('selectedTeams');

    // Add the new selectedTeams parameter
    if (newValue.length > 0) {
      currentUrl.searchParams.set(
        'selectedTeams',
        selectedTeamValues.join('-')
      );
      currentUrl.searchParams.delete('page');
    }
    push(`${currentUrl.pathname}${currentUrl.search}`);
  };

  const defaultValuesIds = searchParams.get('selectedTeams')?.split('-');
  const defaultValues = defaultValuesIds
    ? filterArrayBySelectedIds(teamsOptions, defaultValuesIds)
    : [];
  return (
    <MultiSelect
      defaultValue={defaultValues}
      onChange={onChange}
      options={teamsOptions}
    />
  );
};
