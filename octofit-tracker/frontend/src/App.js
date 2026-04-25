import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function Home() {
  return (
    <div className="text-center">
      <h2 className="mb-3">Welcome to OctoFit Tracker</h2>
      <p className="lead">
        Use the navigation menu to view activities, teams, workouts, users, and the
        leaderboard. The app pulls data from the Django REST API.
      </p>
      <div className="mt-4">
        <button className="btn btn-primary me-2">Get Started</button>
        <button className="btn btn-outline-light">Learn More</button>
      </div>
    </div>
  );
}

function App({ apiHost }) {
  console.log('App API host:', apiHost);

  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <BrowserRouter>
      <div className="container py-4">
        <header className="d-flex align-items-center justify-content-between mb-4">
          <img src="/octofitapp-small.svg" alt="OctoFit Logo" className="logo" />
          <div className="text-center flex-grow-1">
            <h1 className="display-4 mb-0">OctoFit Tracker</h1>
            <p className="lead mb-0">Frontend connected to Django REST API backend.</p>
          </div>
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 rounded">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink end to="/" className={navClass}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/activities" className={navClass}>
                  Activities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teams" className={navClass}>
                  Teams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/workouts" className={navClass}>
                  Workouts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className={navClass}>
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/leaderboard" className={navClass}>
                  Leaderboard
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="card shadow-sm">
          <div className="card-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<Activities apiHost={apiHost} />} />
              <Route path="/teams" element={<Teams apiHost={apiHost} />} />
              <Route path="/workouts" element={<Workouts apiHost={apiHost} />} />
              <Route path="/users" element={<Users apiHost={apiHost} />} />
              <Route path="/leaderboard" element={<Leaderboard apiHost={apiHost} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
