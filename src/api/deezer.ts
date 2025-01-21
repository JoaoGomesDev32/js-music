import axios from 'axios';

const deezerAPI = axios.create({
  baseURL: 'https://api.deezer.com',
});

export default deezerAPI;
