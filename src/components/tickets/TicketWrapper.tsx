import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import TicketItem from "./TicketItem";

interface TicketWrapperProps {
  children: ReactNode;
}

const TicketWrapper: React.FC<TicketWrapperProps> = ({ children }) => {
  return (
    <Box className="mt-20 grid grid-cols-12 " sx={{ boxShadow: "0px 0px 20px rgba(170, 170, 170, 0.5)", borderRadius: '15px'}}>
      {children}
    </Box>
  );
};

export default TicketWrapper;
