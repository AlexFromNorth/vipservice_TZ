import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import cities from './Cities.json';
import { Box } from "@mui/material";
import './AutoCities.scss'

function AutoCities({placeholder, value, setValue}) {
  // const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Функция для обработки ввода пользователя и поиска подсказок
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  // Функция для отображения подсказок
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : cities.filter(
          (city) => city.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // Функция для отображения подсказки при клике
  const getSuggestionValue = (suggestion) => suggestion;

  // Функция для отображения списка подсказок
  const renderSuggestion = (suggestion) => <Box sx={{}}>{suggestion}</Box>;

  // Функция для обработки выбора подсказки
  const onSuggestionSelected = (event, { suggestionValue }) => {
    // Вы можете выполнить дополнительные действия при выборе подсказки
    console.log(`Выбран город: ${suggestionValue}`);
  };

  // Функция для обновления списка подсказок
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Функция для очистки списка подсказок
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: placeholder,
    value,
    onChange,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionSelected={onSuggestionSelected}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}

export default AutoCities;
