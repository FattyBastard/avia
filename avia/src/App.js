import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Search } from './components/search/search';
import { Info } from './components/tickets/tickets';
import React from 'react';

export const AppContext = React.createContext({});

function App() {
  const [cityFrom, setCityFrom] = React.useState('');
  const [cityTo, setCityTo] = React.useState('');
  const [dataFrom, setDataFrom] = React.useState('');
  const [dataTo, setDataTo] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);

  const [validCityTo, setValidCityTo] = React.useState(false);
  const [validCityFrom, setValidCityFrom] = React.useState(false);
  const [validDataTo, setValidDataTo] = React.useState(false);
  const [validDataFrom, setValidDataFrom] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        cityFrom,
        setCityFrom,
        cityTo,
        setCityTo,
        dataFrom,
        setDataFrom,
        dataTo,
        setDataTo,
        formValid,
        setFormValid,
        validCityTo,
        setValidCityTo,
        validCityFrom,
        setValidCityFrom,
        validDataTo,
        setValidDataTo,
        validDataFrom,
        setValidDataFrom,
      }}>
      <Routes>
        <Route exct path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<Search />} />
        <Route path="/avia/info" exact element={<Info />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
