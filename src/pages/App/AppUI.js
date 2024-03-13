import React from "react";
import { Route, Routes } from "react-router-dom";
import DayView from "../DayView";
import Home from "../Home";
import WeekView from "../WeekView";
import ListView from "../ListView";
import Navbar from "../../navbar";
import "./App.scss";

export default function AppUI() {
  return (
    <div className="AppUI">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/day" element={<DayView />} />
        <Route path="/week" element={<WeekView />} />
      </Routes>
      {/* <Navbar /> */}
    </div>
  );
}
