import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import {
  AppLayout,
  AttendeesPage,
  AuthLayout,
  EventsPage,
  FormPage,
  LoginPage,
  ProfilePage,
  QRScanner,
  ReportPage,
  GoalsListGraph
} from "../components";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<AuthLayout children={<LoginPage />} />} />
          <Route
            path="login"
            element={<AuthLayout children={<LoginPage />} />}
          />
          <Route
            path="/goals"
            element={<AuthLayout children={<GoalsListGraph />} />}
          />
          <Route
            path="/scanner"
            element={<AppLayout children={<QRScanner />} />}
          />
          <Route
            path="profile"
            element={<AppLayout children={<ProfilePage />} />}
          />

          <Route
            path="form/*"
            element={<AppLayout children={<FormPage />} />}
          />
          <Route
            path="report"
            element={<AppLayout children={<ReportPage />} />}
          />
          <Route
            path="attendees"
            element={<AppLayout children={<AttendeesPage />} />}
          />
          <Route
            path="events"
            element={<AppLayout children={<EventsPage />} />}
          />
          <Route
            path="*"
            element={
              <AppLayout
                children={
                  <h1 className="text-3xl text-white">
                    Oops Page doesn't exist
                  </h1>
                }
              />
            }
          />
        </Route>
        path=""
      </Routes>
    </Router>
  );
};
