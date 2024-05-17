import React from "react";
import { Route, Routes } from "react-router-dom";
import { Day } from "./routes/Day/Day";
import { Start } from "./routes/Start/Start";
import { Calendar } from "./routes/Calendar/Calendar";
// import Home from "../draft/Home";
// import WeekView from "../draft/WeekView";

export default function AppUI() {
  return (
    <div className="AppUI">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/day/:date" element={<Day />} />
        <Route path="/day/start" element={<Start />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}
