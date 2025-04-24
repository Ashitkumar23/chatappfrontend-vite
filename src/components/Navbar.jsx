import React from 'react';
import '../components/Navbar.css';

function Navbar({ onProfileClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="navbar-profile" onClick={onProfileClick}>
        <img
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg"
          alt="Profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
