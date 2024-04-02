import React from "react";
import { Route, Routes } from "react-router-dom";
import DayView from "./pages/DayView";
import ListView from "./pages/ListView";
// import Home from "../draft/Home";
// import WeekView from "../draft/WeekView";

export default function AppUI() {
  return (
    <div className="AppUI">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/list" element={<ListView />} />
        <Route path="/day" element={<DayView />} />
        {/* <Route path="/week" element={<WeekView />} /> */}
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}
