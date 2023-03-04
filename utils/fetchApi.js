import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "0d99b6e5eamsh83d23bd56ac948fp17d954jsn89732edee7b0",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
}