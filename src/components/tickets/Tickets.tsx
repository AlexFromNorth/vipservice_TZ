import React from "react";
import TicketWrapper from "./TicketWrapper";
import TicketItem from "./TicketItem";
import Search from "../search/search";
import { useSelector } from "react-redux";

const Tickets = () => {
  const ticketsInfo = useSelector((state: any) => {
    return state.items.tickets;
  });
  return (
    <>
      <Search />
        <TicketWrapper>
          <TicketItem ticketsInfo={ticketsInfo}/>
        </TicketWrapper>
    </>
  );
};

export default Tickets;
