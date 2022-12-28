import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import InitialPortfolio from './scenes/2020-2022';
import Portfolio2023 from './scenes/2023';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Portfolio2023 />} />
      <Route path='/initial' element={<InitialPortfolio />} />
    </Routes>
  );
}

export default App;
