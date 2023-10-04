import { useState } from "react";
import Search from "./components/search/search";
import TicketWrapper from "./components/tickets/TicketWrapper";

function App() {
  return (
    <>
      <div className="pl-20 pr-20 pt-5 pb-5">
        <Search />
        <TicketWrapper/>

      </div>
    </>
  );
}

export default App;
