import axios from "axios";


export const fetchYoutubeSearch = (url) => {
  const BASE_URL = `https://youtube-v311.p.rapidapi.com/search`;

  const options = {
    params: {
      part: "snippet",
      maxResults: "50",
    },

    headers: {
      "X-RapidAPI-Key":
        process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
    },
  };

  axios
    .get(`${BASE_URL}?${url}`, options)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.message;
    })
    .finally(() => {
      console.log("Fetched Videos");
    });
};