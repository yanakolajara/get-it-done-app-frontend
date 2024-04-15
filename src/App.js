import React from "react";
import { Route, Routes } from "react-router-dom";
import { Day } from "./pages/Day/Day";
// import Home from "../draft/Home";
// import WeekView from "../draft/WeekView";

export default function AppUI() {
  return (
    <div className="AppUI">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/day" element={<Day />} />
        {/* <Route path="/week" element={<WeekView />} /> */}
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}
