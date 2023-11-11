import { openAPI } from "../../service";
import { tokenURL, userURL, authBody } from ".";
import { registrationPayload } from "./token-dto";
import { UserProps } from "./types";

export const UserService = {
  login: ({ username, password }: { username: string; password: string }) => {
    const data = authBody({ username, password });
    return openAPI.post(tokenURL, data);
  },
  register: (user: UserProps) => {
    const data = registrationPayload(user);
    return openAPI.post(userURL, data);
  },
};
