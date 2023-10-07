import { Box } from "@mui/material";
import React, { useState } from "react";
import Road from "../../assets/Road.svg";
import Bag from "../../assets/bag.png";
import Baggag from "../../assets/багаж.png";
import logo from "../../assets/logo.png";
import styles from "./Ticket.module.scss";
import { format } from "date-fns";

const TicketItem = ({ ticketsInfo }) => {

  const [ticketsTime, setTicketsTime] = useState(['9:20','11:20'])

  return (
    <>
      <Box className="col-span-2 ">
        <Box className="relative" sx={{ height: "50%" }}>
          <span className={styles.ticket_logo__label}>Невозвратный</span>
          <img className={styles.ticket_logo__img} src={logo} alt="Logo" />
          <p className="text-center pb-10 fs18">S7 Airlines</p>
        </Box>
        {ticketsInfo.backDate ? (
          <Box className="relative" sx={{ height: "50%" }}>
            <span className={styles.ticket_logo__label}>Невозвратный</span>
            <img className={styles.ticket_logo__img} src={logo} alt="Logo" />
            <p className="text-center pb-10 fs18">S7 Airlines</p>
          </Box>
        ) : (
          false
        )}
      </Box>
      <Box className="col-span-7">
        <Box sx={{ marginTop: "44px", paddingRight: "20px" }}>
          <Box className="flex justify-between">
            <Box sx={{ marginTop: "15px" }}>
              <p className="fs24 fw700">{ticketsTime[0]}</p>
              <p className="fw500">{ticketsInfo.arrival}</p>
              <p>{format(ticketsInfo.startDate, "dd.MM.yy")}</p>
            </Box>
            <Box>
              <img src={Road} alt="Road" />
            </Box>
            <Box className="flex">
              <Box sx={{ marginTop: "15px" }}>
                <p className="fs24 fw700">{ticketsTime[1]}</p>
                <p className="fw500">{ticketsInfo.departure}</p>
                <p>{format(ticketsInfo.startDate, "dd.MM.yy")}</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  marginLeft: "30px",
                  justifyContent: "space-between",
                  width: "52px",
                }}
              >
                <img src={Bag} alt="" />
                <img src={Baggag} alt="" />
              </Box>
            </Box>
          </Box>
          {ticketsInfo.backDate == undefined ? (
            <Box sx={{ marginTop: "24px", marginBottom: "30px" }}>
              <Box
                sx={{
                  borderRadius: "10px",
                  border: "1px solid grey",
                  padding: "6px",
                  display: "inline",
                  marginRight: "20px",
                  fontWeight: "500",
                }}
                className="hover"

              >
                <button onClick={()=>setTicketsTime(['09:20','11:05'])}>
                  <span className="fs18">09:20</span> - 11:05
                </button>
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  border: "1px solid grey",
                  padding: "6px",
                  display: "inline",
                  marginRight: "20px",
                  fontWeight: "500",
                }}
                className="hover"
              >
                <button onClick={()=>setTicketsTime(['10:20','12:05'])}>
                  <span className="fs18">10:20</span> - 12:05
                </button>
              </Box>
              <Box
                sx={{
                  borderRadius: "10px",
                  border: "1px solid grey",
                  padding: "6px",
                  display: "inline",
                  marginRight: "20px",
                  fontWeight: "500",
                }}
                className="hover"

              >
                <button onClick={()=>setTicketsTime(['11:20','13:05'])}>
                  <span className="fs18">11:20</span> - 13:05
                </button>
              </Box>
            </Box>
          ) : (
            false
          )}
        </Box>
        {ticketsInfo.backDate ? (
          <Box
            className="dashed"
            sx={{ marginTop: "42px", paddingTop: "44px", paddingRight: "20px" }}
          >
            <Box className="flex justify-between">
              <Box sx={{ marginTop: "15px" }}>
                <p className="fs24 fw700">9:20</p>
                <p className="fw500">{ticketsInfo.arrival}</p>
                <p>{format(ticketsInfo.startDate, "dd.MM.yy")}</p>
              </Box>
              <Box>
                <img src={Road} alt="Road" />
              </Box>
              <Box className="flex">
                <Box sx={{ marginTop: "15px" }}>
                  <p className="fs24 fw700">11:20</p>
                  <p className="fw500">{ticketsInfo.departure}</p>
                  <p>{format(ticketsInfo.startDate, "dd.MM.yy")}</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    marginLeft: "30px",
                    justifyContent: "space-between",
                    width: "52px",
                  }}
                >
                  <img src={Bag} alt="" />
                  <img src={Baggag} alt="" />
                </Box>
              </Box>
            </Box>
            {ticketsInfo.backDate == undefined ? (
              <Box sx={{ marginTop: "24px" }}>
                <Box
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid grey",
                    padding: "6px",
                    display: "inline",
                    marginRight: "20px",
                  }}
                >
                  09:20 - 11:05
                </Box>
                <Box
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid grey",
                    padding: "6px",
                    display: "inline",
                    marginRight: "20px",
                  }}
                >
                  10:20 - 12:05
                </Box>
                <Box
                  sx={{
                    borderRadius: "10px",
                    border: "1px solid grey",
                    padding: "6px",
                    display: "inline",
                    marginRight: "20px",
                  }}
                >
                  11:20 - 13:05
                </Box>
              </Box>
            ) : (
              false
            )}
          </Box>
        ) : (
          false
        )}
      </Box>
      <Box
        className="col-span-3 flex"
        sx={{
          borderLeft: "1px solid #DDE3EE",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ticketsInfo.backDate == undefined ? (
          <span className="fs32 fw700">4 150 ₽</span>
        ) : (
          <span className="fs32 fw700">8 300 ₽</span>
        )}
      </Box>
    </>
  );
};

export default TicketItem;
