import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
import { AppRouter } from "./routes";
import { AppLayout } from "./components/layout";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <AppLayout children={<AppRouter />} />
      </>
    </Router>
  );
}

export default App;
