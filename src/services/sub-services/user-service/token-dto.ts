import { UserProps } from "./types";

export const registrationPayload = (newUser: UserProps) => {
  return {
    user: {
      email: newUser.username,
      password: newUser.password,
    },
  };
};
