import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHome from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppHome />} />
      </Routes>
    </BrowserRouter>
  
    )}
  
  export default App;
  
