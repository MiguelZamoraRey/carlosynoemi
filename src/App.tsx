import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import GuestSurvey from './pages/GuestSurvey/GuestSurvey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:id" element={<GuestSurvey />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
