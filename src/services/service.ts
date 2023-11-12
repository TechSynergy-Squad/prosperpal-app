import axios from "axios";

export const baseURL = "https://localhost:5001/api";

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
