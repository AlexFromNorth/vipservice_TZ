import { Box } from "@mui/material";
import React from "react";
import Road from "../../assets/Road.svg";
import Bag from "../../assets/bag.png";
import Baggag from "../../assets/багаж.png";
import logo from "../../assets/logo.png";
import styles from './Ticket.module.scss'

const TicketItem = () => {
  return (
    <>
      <Box className="col-span-2 relative" >
        <span className={styles.ticket_logo__label}>Невозвратный</span>
        <img className={styles.ticket_logo__img} src={logo} alt="Logo" />
        <p className="text-center">S7 Airlines</p>
      </Box>
      <Box className="col-span-7  " sx={{marginTop: '32px' }}>
        <Box className="flex justify-between">
          <Box sx={{marginTop: '15px'}}>
            <p>9:20</p>
            <p>Москва</p>
            <p>19.05.2022</p>
          </Box>
          <Box>
            <img src={Road} alt="Road" />
          </Box>
          <Box className="flex">
            <Box sx={{marginTop: '15px'}}>
              <p>11:20</p>
              <p>Ростов-на-Догу</p>
              <p>19.05.2022</p>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'baseline', marginLeft: '30px', justifyContent: 'space-between', width: '52px'}}>
              <img src={Bag} alt="" />
              <img src={Baggag} alt="" />
            </Box>
          </Box>
        </Box>
        <Box sx={{marginTop: '24px'}}>
            <Box sx={{borderRadius: '10px', border: '1px solid grey', padding: '6px', display: 'inline', marginRight: '20px'}}>
                09:20 - 11:05
            </Box>
            <Box sx={{borderRadius: '10px', border: '1px solid grey', padding: '6px', display: 'inline', marginRight: '20px'}}>
                10:20 - 12:05
            </Box>
            <Box sx={{borderRadius: '10px', border: '1px solid grey', padding: '6px', display: 'inline', marginRight: '20px'}}>
                11:20 - 13:05
            </Box>

        </Box>
      </Box>
      <Box
        className="col-span-3 flex"
        sx={{ borderLeft: "1px solid #DDE3EE", justifyContent: 'center', alignItems: 'center', marginTop: '27px' }}
      >
        4 150 ₽
      </Box>
    </>
  );
};

export default TicketItem;
