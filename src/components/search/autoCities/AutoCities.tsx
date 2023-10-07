import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import cities from './Cities.json';
import { Box } from "@mui/material";
import './AutoCities.scss';
import { AutoCitiesProps } from "../../../types/Types";


function AutoCities({ placeholder, value, setValue }: AutoCitiesProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, { newValue }: Autosuggest.ChangeEvent) => {
    setValue(newValue);
  };

  const getSuggestions = (inputValue: string) => {
    const trimmedInputValue = inputValue.trim().toLowerCase();
    const inputLength = trimmedInputValue.length;

    return inputLength === 0
      ? []
      : cities.filter(
          (city) => city.toLowerCase().slice(0, inputLength) === trimmedInputValue
        );
  };

  const getSuggestionValue = (suggestion: string) => suggestion;

  const renderSuggestion = (suggestion: string) => <Box sx={{}}>{suggestion}</Box>;

  const onSuggestionSelected = (event: React.FormEvent, { suggestionValue }: Autosuggest.SuggestionSelectedEventData) => {
    console.log(`Выбран город: ${suggestionValue}`);
  };

  const onSuggestionsFetchRequested = ({ value }: Autosuggest.SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  };

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
