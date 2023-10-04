import { useState } from "react";
import Search from "./components/search/search";
import TicketWrapper from "./components/tickets/TicketWrapper";
import TicketItem from "./components/tickets/TicketItem";

function App() {
  return (
    <>
      <div className="pl-20 pr-20 pt-5 pb-5">
        <Search />
        <TicketWrapper>
          <TicketItem/>
        </TicketWrapper>
        <TicketWrapper>
          <TicketItem/>
          <TicketItem/>
        </TicketWrapper>

      </div>
    </>
  );
}

export default App;
