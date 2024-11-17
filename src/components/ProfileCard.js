import React from 'react';
import userImage from '../static/image/user_image.jpg'

const ProfileCard = ({ profile, onSelectProfile }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <img className="w-full h-48 object-cover" src={profile.photo || userImage} alt={profile.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{profile.name}</div>
        <p className="text-gray-700 text-base">{profile.description}</p>
        <button 
          onClick={() => onSelectProfile(profile)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Show on Map
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
