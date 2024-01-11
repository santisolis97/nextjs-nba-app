import { Meta } from './meta';
import { Team } from './teams';

// Type for a single game
export type Game = {
  id: number;
  date: string;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
};

// Type for the entire API response
export type GamesApiResponse = {
  data: Game[];
  meta: Meta;
};
