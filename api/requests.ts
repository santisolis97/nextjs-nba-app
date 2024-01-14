import { GamesApiResponse } from "../types/games";
import { PlayersApiResponse } from "../types/players";
import { TeamsApiResponse } from "../types/teams";
import { NBAAxios } from "./axiosConfig";

export const getGames = async (page: string, teams: number[]) =>
  await NBAAxios.get<GamesApiResponse>("/games", {
    params: {
      page,
      per_page: "12",
      team_ids: teams,
    },
  });

export const getTeams = async () =>
  await NBAAxios.get<TeamsApiResponse>("/teams");

export const getPlayers = async (page: string, query: string) =>
  await NBAAxios.get<PlayersApiResponse>("/players", {
    params: {
      page,
      per_page: "12",
      search: query,
    },
  });
