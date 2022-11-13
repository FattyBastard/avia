import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Search } from './components/search/search';
import { Tickets } from './components/tickets/tickets';
import React from 'react';

interface IAppContext {
  cityFrom: string;
  CityFromHandler: (string: string) => void;
  cityTo: string;
  CityToHandler: (string: string) => void;
  dataFrom: string;
  DataFromHandler: (string: string) => void;
  dataTo: string;
  DataToHandler: (string: string) => void;
  formValid: boolean;
  FormValidHandler: (boolean: boolean) => void;
  validCityTo: boolean;
  ValidCityToHandler: (boolean: boolean) => void;
  validCityFrom: boolean;
  ValidCityFromHandler: (boolean: boolean) => void;
  validDataTo: boolean;
  ValidDataToHandler: (boolean: boolean) => void;
  validDataFrom: boolean;
  ValidDataFromHandler: (boolean: boolean) => void;
}

const defaultState = {
  cityFrom: '',
  CityFromHandler: (string: string) => {},
  cityTo: '',
  CityToHandler: (string: string) => {},
  dataFrom: '',
  DataFromHandler: (string: string) => {},
  dataTo: '',
  DataToHandler: (string: string) => {},
  formValid: false,
  FormValidHandler: (boolean: boolean) => {},
  validCityTo: false,
  ValidCityToHandler: (boolean: boolean) => {},
  validCityFrom: false,
  ValidCityFromHandler: (boolean: boolean) => {},
  validDataTo: false,
  ValidDataToHandler: (boolean: boolean) => {},
  validDataFrom: false,
  ValidDataFromHandler: (boolean: boolean) => {},
};
export const AppContext = React.createContext<IAppContext>(defaultState);

function App() {
  const [cityTo, setCityTo] = React.useState<string>(defaultState.cityTo);
  const [cityFrom, setCityFrom] = React.useState<string>(defaultState.cityFrom);
  const [dataFrom, setDataFrom] = React.useState<string>(defaultState.dataFrom);
  const [dataTo, setDataTo] = React.useState<string>(defaultState.dataTo);

  const [formValid, setFormValid] = React.useState<boolean>(defaultState.formValid);

  const [validCityTo, setValidCityTo] = React.useState<boolean>(defaultState.validCityTo);
  const [validCityFrom, setValidCityFrom] = React.useState<boolean>(defaultState.validCityFrom);
  const [validDataTo, setValidDataTo] = React.useState<boolean>(defaultState.validDataTo);
  const [validDataFrom, setValidDataFrom] = React.useState<boolean>(defaultState.validDataFrom);

  const CityFromHandler = (string: string) => {
    setCityFrom(string);
  };

  const CityToHandler = (string: string) => {
    setCityTo(string);
  };

  const DataFromHandler = (string: string) => {
    setDataFrom(string);
  };

  const DataToHandler = (string: string) => {
    setDataTo(string);
  };

  const FormValidHandler = (boolean: boolean) => {
    setFormValid(boolean);
  };

  const ValidCityFromHandler = (boolean: boolean) => {
    setValidCityFrom(boolean);
  };

  const ValidCityToHandler = (boolean: boolean) => {
    setValidCityTo(boolean);
  };

  const ValidDataFromHandler = (boolean: boolean) => {
    setValidDataFrom(boolean);
  };

  const ValidDataToHandler = (boolean: boolean) => {
    setValidDataTo(boolean);
  };

  return (
    <AppContext.Provider
      value={{
        cityFrom,
        CityFromHandler,
        cityTo,
        CityToHandler,
        dataFrom,
        DataFromHandler,
        dataTo,
        DataToHandler,
        formValid,
        FormValidHandler,
        validCityTo,
        ValidCityToHandler,
        validCityFrom,
        ValidCityFromHandler,
        validDataTo,
        ValidDataToHandler,
        validDataFrom,
        ValidDataFromHandler,
      }}>
      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<Search />} />
        <Route path="/avia/info" element={<Tickets />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
