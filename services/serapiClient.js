import dotenv from "dotenv";
import { GoogleSearch } from "google-search-results-nodejs";

dotenv.config();

const client = new GoogleSearch(process.env.SERPAPI_KEY);

export const runSearch = (params) => {
  return new Promise((resolve, reject) => {
    client.json(params, (data) => {
      if (data.error) return reject(data.error);
      resolve(data);
    });
  });
};