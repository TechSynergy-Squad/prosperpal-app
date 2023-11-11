import axios from "axios";

export const baseURL = "http://localhost:5001/api";

export const openAPI = axios.create({
  baseURL: baseURL,
});

export const closedAPI = axios.create({
  baseURL: baseURL,
  /*   headers: {
    Authorization: "Bearer " + TokenActions.get(),
  }, */
});
