import React, { useState } from "react";
import styles from "./Search.module.scss";
import AutoCities from "./autoCities/AutoCities";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [startDate, setStartDate] = useState();
  const [backDate, setBackDate] = useState();
  return (
    <div className={styles.search}>
      <div className={styles.selectors}>
        <div>
          <label htmlFor="">Откуда</label>
          <AutoCities placeholder="Город вылета" />
          {/* <input type="text" placeholder="Город вылета" /> */}
        </div>
        <div>
          <label htmlFor="">Куда</label>
          <AutoCities placeholder="Город прилета" />

          {/* <input type="text" placeholder="Город прилета" /> */}
        </div>
        <div className={styles.calendar}>
        <label htmlFor="">Туда</label>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="дд.мм.гг"
          />
          {/* <input type="text" placeholder="дд.мм.гг" /> */}
        </div>
        <div className={styles.calendar}>
          <label htmlFor="">Обратно</label>
          <DatePicker
            showIcon
            selected={backDate}
            onChange={(date) => setBackDate(date)}
            placeholderText="дд.мм.гг"
          />
          {/* <input type="text" placeholder="дд.мм.гг" /> */}
        </div>
      </div>
      <div className={styles.buttom}>
        <button className="">Найти билеты</button>
      </div>
    </div>
  );
};

export default Search;
