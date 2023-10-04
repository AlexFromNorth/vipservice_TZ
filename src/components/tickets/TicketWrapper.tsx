import { Box } from "@mui/material";
import React from "react";
import TicketItem from "./TicketItem";

const TicketWrapper = ({ children }) => {
  return (
    <Box className="mt-20 grid grid-cols-12 gap-6" sx={{ boxShadow: "0px 0px 20px rgba(170, 170, 170, 0.5)", borderRadius: '15px', paddingBottom: '27px'}}>
      { children }
    </Box>
  );
};

export default TicketWrapper;
