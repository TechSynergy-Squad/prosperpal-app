export const authBody = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return {
    username: username, //import.meta.env.VITE_USERNAME
    password: password, //import.meta.env.VITE_PASSWORD
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    grant_type: "password",
    scope: "read write",
  };
};

export const TokenActions = {
  get: () => {
    return localStorage.getItem("accessToken");
  },
  set: (token: string) => {
    localStorage.setItem("accessToken", token);
  },
  remove: () => {
    localStorage.removeItem("accessToken");
  },
};
