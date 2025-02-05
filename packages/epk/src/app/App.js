import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AppRoutes from "./routes";
import HeaderMain from "../header";
import "./App.css";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HeaderMain />
      <AppRoutes />
    </Router>
  );
}
