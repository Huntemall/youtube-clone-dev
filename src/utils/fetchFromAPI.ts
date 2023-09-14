import axios, { AxiosResponse } from "axios";

// Base URL
const BASE_URL: string = "https://youtube-v31.p.rapidapi.com";

// API Options
const options: {
  params: {
    maxResults: string;
  };
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
} = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY!,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// fetch from API
export const fetchFromAPI = async (url: string): Promise<any> => {
  const { data }: AxiosResponse<any> = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};