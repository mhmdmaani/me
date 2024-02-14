import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CircleSlider from './components/circleSlider/CircleSlider';
import FullCircleSlider from './components/fullCircleSlider/CircleSlider';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CircleSlider />} />
        <Route path='/full-slider' element={<FullCircleSlider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
