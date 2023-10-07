import React from "react";
import { useSelector } from "react-redux";
import TicketWrapper from "./TicketWrapper";
import TicketItem from "./TicketItem";
import Search from "../search/search";
import { RootState } from "../../store"; 
const Tickets: React.FC = () => {
  const ticketsInfo = useSelector((state: RootState) => {
    return state.items.tickets;
  });

  return (
    <>
      <Search />
      <TicketWrapper>
        <TicketItem ticketsInfo={ticketsInfo} />
      </TicketWrapper>
    </>
  );
};

export default Tickets;
