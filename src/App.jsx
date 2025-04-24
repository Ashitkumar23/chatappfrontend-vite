import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Profile from './components/Profile.jsx';
import ChatList from './components/ChatList.jsx';
import Chats from './components/Chats.jsx';
import Registeruser from './components/Registeruser.jsx';
import Loginform from './components/Loginform.jsx';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isNewUser, setIsNewUser] = useState(true); // Optional toggle between register/login

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        isNewUser ? (
          <Registeruser onSwitchToLogin={() => setIsNewUser(false)} onRegisterSuccess={handleLogin} />
        ) : (
          <Loginform onLoginSuccess={handleLogin} onSwitchToRegister={() => setIsNewUser(true)} />
        )
      ) : (
        <>
          <Navbar onProfileClick={toggleProfile} />
          <Sidebar />
          {showProfile && <Profile />}
          <ChatList />
          <Chats />
        </>
      )}
    </>
  );
}

export default App;
