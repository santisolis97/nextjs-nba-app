import { Meta } from './meta';
import { Team } from './teams';

export type Player = {
  id: number;
  first_name: string;
  height_feet: number | null;
  height_inches: number | null;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds: number | null;
};
export type PlayersApiResponse = {
  data: Player[];
  meta: Meta;
};
