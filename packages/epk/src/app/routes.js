import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Releases } from "../pages/releases";
import { Remixes } from "../pages/remixes";
import { Mixes } from "../pages/mixes";
import { Events } from "../pages/events";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";

import { Socialicons } from "../components/socialicons";

const AppRouter = withRouter(({ location }) => (
  <Routes location={location}>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/releases" element={<Releases />} />
    <Route path="/remixes" element={<Remixes />} />
    <Route path="/mixes" element={<Mixes />} />
    <Route path="/events" element={<Events />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="*" element={<Home />} />
  </Routes>
));

function AppRoutes() {
  return (
    <div className="s_c pb-1">
      <AppRouter />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
