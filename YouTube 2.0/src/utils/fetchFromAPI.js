import axios from "axios";

const BASE_URL = 'https://youtube-v311.p.rapidapi.com'
const options = {
  params: {
    maxResults: '5',
  },
  headers: {
    'X-RapidAPI-Key': '29f55dc7b6msh323901a186f73ddp1073b2jsn0fe129e159de',
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
  }
};

export const fetchYoutubeSearch = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
  
};