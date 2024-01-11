import { GamesApiResponse } from '../types/games';
import { TeamsApiResponse } from '../types/teams';
import { NBAAxios } from './axiosConfig';

export const getGames = async (page: string, teams: number[]) =>
  await NBAAxios.get<GamesApiResponse>('/games', {
    params: {
      page,
      per_page: '12',
      team_ids: teams,
    },
  });

export const getTeams = async () =>
  await NBAAxios.get<TeamsApiResponse>('/teams');
