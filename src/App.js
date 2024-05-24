import React from "react";
import { Route, Routes } from "react-router-dom";
import { Day } from "./pages/Day/Day";
import { Calendar } from "./pages/Calendar/Calendar";
import "./styles/main.scss";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/day/:date" element={<Day />} />
      </Routes>
    </div>
  );
}
