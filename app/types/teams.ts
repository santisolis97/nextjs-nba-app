import { Meta } from './meta';

export type Team = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
};
export type TeamsApiResponse = {
  data: Team[];
  meta: Meta;
};
