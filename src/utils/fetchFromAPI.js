import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    "X-RapidAPI-Key": '61f75debc3msh789a892e80ab618p190985jsn3a3386c116c0',
    "X-RapidAPI-Host": 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
