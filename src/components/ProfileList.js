import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard'; // We'll create this next

const ProfileList = ({ profiles, onSelectProfile }) => {
    return (
      <div>
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} onSelectProfile={onSelectProfile} />
        ))}
      </div>
    );
  };

export default ProfileList;
