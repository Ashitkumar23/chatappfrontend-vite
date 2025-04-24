import React from 'react';
import '../components/Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img 
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" 
          alt="Profile" 
          className="profile-image"
        />
        <h2 className="profile-name">John Doe</h2>
        <div className='About-div my-2'>
            <p className="about">About</p>
            <span>mind your own bussiness</span>
        </div>
        
        <p className="profile-email">johndoe@example.com</p>
        <button className="profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
