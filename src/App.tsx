import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./components/search/search";
import Tickets from "./components/tickets/Tickets";

function App(): JSX.Element {
  return (
    <div className="pl-20 pr-20 pt-5 pb-5">
      <Routes>
        <Route path="*" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<Search />} />
        <Route path="/avia/info" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
