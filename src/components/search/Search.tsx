import React, { useState } from "react";
import styles from "./Search.module.scss";
import AutoCities from "./autoCities/AutoCities";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTickets } from "../../store/itemsSlice";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {TicketData} from "../../types/Types";

const Search: React.FC = () => {
  const [arrival, setArrival] = useState<string>("");
  const [departure, setDeparture] = useState<string>("");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [backDate, setBackDate] = useState<Date | null>(null);

  const isFormValid: boolean =
    arrival !== "" && departure !== "" && startDate !== null;

  const [btnClick, setBtnClick] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAddTickets = () => {
    const ticketData: TicketData = {
      arrival,
      departure,
      startDate,
      backDate,
    };
    dispatch(addTickets(ticketData));
  };

  return (
    <div className={styles.search}>
      <div className={styles.selectors}>
        <div>
          <label htmlFor="">Откуда</label>
          <Box
            sx={
              btnClick === true && arrival === ""
                ? { border: "2px solid red", borderRadius: "10px" }
                : { border: "2px solid transparent" }
            }
          >
            <AutoCities placeholder="Город вылета" value={arrival} setValue={setArrival} />
          </Box>
        </div>
        <div>
          <label htmlFor="">Куда</label>
          <Box
            sx={
              btnClick === true && departure === ""
                ? { border: "2px solid red", borderRadius: "10px" }
                : { border: "2px solid transparent" }
            }
          >
            <AutoCities placeholder="Город прилета" value={departure} setValue={setDeparture} />
          </Box>
        </div>
        <div className={styles.calendar}>
          <label htmlFor="">Туда</label>
          <Box
            sx={
              btnClick === true && startDate === null
                ? { border: "2px solid red", borderRadius: "10px" }
                : { border: "2px solid transparent" }
            }
          >
            <DatePicker
              className="w-100"
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="дд.мм.гг"
              dateFormat="dd.MM.yyyy"
            />
          </Box>
        </div>
        <div className={styles.calendar}>
          <label htmlFor="">Обратно</label>
          <DatePicker
            showIcon
            selected={backDate}
            onChange={(date) => setBackDate(date)}
            placeholderText="дд.мм.гг"
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>
      <div className={styles.buttom}>
        {isFormValid ? (
          <Link to="/avia/info" onClick={handleAddTickets}>
            <button>Найти билеты</button>
          </Link>
        ) : (
          <button onClick={() => setBtnClick(true)}>Найти билеты</button>
        )}
      </div>
    </div>
  );
};

export default Search;
