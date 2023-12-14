import axios from "axios";

const BASE_URL = 'https://youtube-v311.p.rapidapi.com'
const options = {
  params: {
    part: 'snippet',
    maxResults: '50',
    order: 'relevance',
    safeSearch: 'moderate',
    type: 'video,channel'
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