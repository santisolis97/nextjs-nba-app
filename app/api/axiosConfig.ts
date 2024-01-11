import axios from 'axios';
export const NBAAxios = axios.create({
  baseURL: 'https://free-nba.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST,
  },
});
