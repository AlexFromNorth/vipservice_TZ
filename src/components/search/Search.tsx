import React, { useState } from "react";
import styles from "./Search.module.scss";
import AutoCities from "./autoCities/AutoCities";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTickets } from "../../store/itemsSlice";
import "react-datepicker/dist/react-datepicker.css";
import {format} from 'date-fns';

const Search = () => {

  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  const [startDate, setStartDate] = useState();
  const [backDate, setBackDate] = useState();

  const isFormValid = arrival !== "" && departure !== "" && startDate !==undefined;

  const [btnClick, setBtnClick] = useState(false)

  const dispatch = useDispatch();

  const handleAddTickets = () => {
    const ticketData = {
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
          <Box sx={btnClick===true && arrival==''? {border: '2px solid red', borderRadius: '10px'}: {border: '2px solid transparent'} }>
            <AutoCities placeholder="Город вылета" value={arrival} setValue={setArrival}/>
          </Box>
        </div>
        <div>
          <label htmlFor="">Куда</label>
          <Box sx={btnClick===true && departure==''? {border: '2px solid red', borderRadius: '10px'}: {border: '2px solid transparent'} }>
            <AutoCities placeholder="Город прилета" value={departure} setValue={setDeparture} />
          </Box>
        </div>
        <div className={styles.calendar}>
        <label htmlFor="">Туда</label>
        <Box sx={btnClick===true && startDate==undefined? {border: '2px solid red', borderRadius: '10px'}: {border: '2px solid transparent'} }>
          <DatePicker
          className='w-100'
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
          <button onClick={()=>setBtnClick(true)} >Найти билеты</button>
        )}
      </div>
    </div>
  );
};

export default Search;
