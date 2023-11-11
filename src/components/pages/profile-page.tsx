import { Outlet, Route, Routes, useNavigate } from "react-router";

import { ProfilePanel } from "@project/components";

export const ProfilePage = () => {
  return (
    <section className="profile-panel flex-col gap-4">
      <ProfilePanel />
      <Outlet />
    </section>
  );
};
