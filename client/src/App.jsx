import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AsideMenu from './Components/Aside/AsideMenu';
import Home from './Pages/Home';
import Discover from './Pages/Page';
import Trends from './Components/Trends/Trends';
import Images from './Components/Images/ProfileImages';
import User from './Pages/User';
import Login from './Pages/Login';
import './main.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="spacer">
        <div className="aside-menu">
          <AsideMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </div>
        <div className='center-section'>
          <Routes>
            <Route path="/profile" element={<Images />} />
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          </Routes>
        </div>
        <div className="trends-section">
          <Trends />
        </div>
      </div>
    </Router>
  );
}

export default App;
