import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import user_image from './static/image/user_image.jpg';
import UserNavigation from './components/UserNavigation';
import MainContent from './components/MainContent';
import './App.css'; // Ensure your global styles are also applied

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);  // Ensure this line is included

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
    setSelectedLocation({ lat: profile.latitude, lng: profile.longitude });
  };

  const dummyProfiles = [
    { id: 1, name: 'John Doe', latitude: 28.7041, longitude: 77.1025, photo: user_image, description: 'Great human being.' }, // Delhi
    { id: 2, name: 'Faizan Patel', latitude: 18.5204, longitude: 73.8567, photo: user_image, description: 'Hi, I am Faizan, I work in tech.' }, // Pune
    { id: 3, name: 'Kundan Pandey', latitude: 19.0760, longitude: 72.8777, photo: user_image, description: 'This guy is unknown to most.' }, // Mumbai
    // Add more profiles as necessary
  ];

  return (
    <div className="App">
      <UserNavigation />
      <MainContent>
        <ProfileList profiles={dummyProfiles} onSelectProfile={handleSelectProfile} />
        {selectedProfile && <MapComponent location={selectedLocation} profile={selectedProfile} />}
      </MainContent>
    </div>
  );
};

export default App;
