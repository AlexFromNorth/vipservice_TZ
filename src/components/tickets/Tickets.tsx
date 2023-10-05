import React from 'react'
import TicketWrapper from './TicketWrapper'
import TicketItem from './TicketItem'
import Search from '../search/search'

const Tickets = () => {
  return (
    <>
        <Search/>
        <TicketWrapper>
          <TicketItem />
        </TicketWrapper>
        <TicketWrapper>
          <TicketItem />
          <TicketItem />
        </TicketWrapper>
    </>
  )
}

export default Tickets