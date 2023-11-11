import axios from "axios";
import { TokenActions } from "./sub-services/user-service";

export const baseURL = "https://gradserver.onrender.com";

export const openAPI = axios.create({
  baseURL: baseURL,
});

export const closedAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "Bearer " + TokenActions.get(),
  },
});
