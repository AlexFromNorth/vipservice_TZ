import { useState } from "react";
import Search from "./components/search/search";
import TicketWrapper from "./components/tickets/TicketWrapper";
import TicketItem from "./components/tickets/TicketItem";
import { Route, Routes } from "react-router-dom";
import Tickets from "./components/tickets/Tickets";
import AutoCities from "./components/search/autoCities/AutoCities";

function App() {

  return (
    <>
        <div className="pl-20 pr-20 pt-5 pb-5">
          <Routes>
            <Route path="/avia" element={<Search />} />
            <Route path="/avia/info" element={<Tickets />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
