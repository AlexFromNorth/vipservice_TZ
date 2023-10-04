import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.selectors}>
        <div >
          <label htmlFor="">Откуда</label>
          <input type="text" placeholder="Город вылета" />
        </div>
        <div >
          <label htmlFor="">Куда</label>
          <input type="text" placeholder="Город прилета" />
        </div>
        <div >
          <label htmlFor="">Туда</label>
          <input type="text" placeholder="дд.мм.гг" />
        </div>
        <div >
          <label htmlFor="">Обратно</label>
          <input type="text" placeholder="дд.мм.гг" />
        </div>
      </div>
      <div className={styles.buttom}>
        <button className="">Найти билеты</button>
      </div>
    </div>
  );
};

export default Search;
