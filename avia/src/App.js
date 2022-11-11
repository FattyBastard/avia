import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Search } from './components/search/search';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      {/* <Route path="/avia/info" exact element={<Info />} /> */}
    </Routes>
  );
}

export default App;
