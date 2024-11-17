import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const initialCenter = {
  lat: -34.397,
  lng: 150.644,
};

const MapComponent = ({ location, profile }) => {
  const [currentCenter, setCurrentCenter] = useState(initialCenter);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  // Update center when location changes
  useEffect(() => {
    console.log("Current location:", location);
    if (location) {
      setCurrentCenter(location);
      setShowInfoWindow(false);  // This line closes the InfoWindow when location changes
    }
  }, [location]);

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="AIzaSyAeWIhQ8V60U-jrMc3GHuaapkH2lc5bzEE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentCenter}
          zoom={10}
        >
          {location && (
            <Marker
              position={location}
              onClick={() => setShowInfoWindow(true)}
            >
              {showInfoWindow && profile && (
                <InfoWindow
                  position={location}
                  onCloseClick={() => setShowInfoWindow(false)}
                >
                  <div>
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          )}

        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
