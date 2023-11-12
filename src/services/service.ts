import axios from "axios";

export const baseURL =
  "https://api.dictionaryapi.dev/api/v2/entries/en/precious";

export const openAPI = axios.create({
  baseURL: baseURL,
});

export const closedAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    // Authorization: "Bearer " + TokenActions.get(),
  },
});
