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
