import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import InitialPortfolio from './scenes/2020-2022';
import Portfolio2023 from './scenes/2023';
import Portfolio2025 from './scenes/2025';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Portfolio2025 />} />
      <Route path='/2023-2025' element={<Portfolio2023 />} />
      <Route path='/initial' element={<InitialPortfolio />} />
    </Routes>
  );
}

export default App;
