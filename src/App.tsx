import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import GuestSurvey from './pages/GuestSurvey/GuestSurvey';
import StarBackground from './components/StarBackground/StarBackground';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StarBackground />
              <Home />
            </>
          }
        />
        <Route
          path="/survey/:code"
          element={
            <>
              <StarBackground />
              <GuestSurvey />
            </>
          }
        />
        <Route
          path="/landing"
          element={
            <>
              <StarBackground />
              <Landing />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
