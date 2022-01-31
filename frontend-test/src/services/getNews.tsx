import React from "react";
import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "https://newsapi.org/v2";
const API_KEY: string = "5f903802af594e319fe8f2d7213e2318";

export const getNews = async () => {
  try {
    const path: string = "/top-headlines";
    const query: string = `?country=id&apiKey=${API_KEY}`;
    const endpointURL: string = `${BASE_URL}${path}${query}`;

    const res: AxiosResponse<any, any> = await axios.get(endpointURL);

    if (res.status === 200) {
      const resData: any = {
        ...res.data,
      };
      return resData;
    }
  } catch (error) {
    console.error(error);
  }
};
