import { Outlet } from "react-router";

import { ProfilePanel } from "../molecules";

export const ProfilePage = () => {
  return (
    <section className="profile-panel flex-col gap-4">
      <ProfilePanel />
      <Outlet />
    </section>
  );
};
