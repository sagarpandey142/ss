import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import { FaFacebook } from "react-icons/fa";

const FollowersBox = () => {
  const [profileUrl, setProfileUrl] = useState(null);
  const [profileData, setProfileData] = useState(null);
 

  const facebookDataFetch = () => {
    const accessToken = 'EAAOxVlLLxCwBOxX5wsh4ZBP808d4CcehwjwzEmVGhfFNkn3PCsDGk1RekmEPsQxyPE1GP6fs1cbSpoQ7uOelwtPbXXuZCBSiaIqwa5L5ZCLJZBnP9ouLP1w3qbZAzMQvpDcHHoSXy9ryE9PsMmIQXl6Y3BMNirfZBP3aRrJlo80bSkAUdoj0gX2mZBwD3dYA9O2aGXYKM7TpWl6QZBCc9S94kpM2aVoZD';
    
    fetch(`https://graph.facebook.com/${profileUrl}?fields=id,name,email,picture&access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error.message);
        } else {
          setProfileData(data);
          setError(null);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setError('An error occurred while fetching data.');
      });
  }

  useEffect(() => {
    facebookDataFetch();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-64 p-6 bg-blue-500 text-center rounded-lg">
        <FaFacebook className='text-3xl mx-auto mt-1 pb-1'/>
        <input
          type="text"
          placeholder="Enter Facebook user Id"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          className="mb-4 p-2 rounded"
        />
        <button onClick={facebookDataFetch} className="bg-white text-blue-500 px-4 py-2 rounded">
          Search
        </button>
       
        {profileData && !error && (
          <div className="text-center">
            <img 
              src={profileData.picture.data.url} // Adjust based on actual API response
              alt="Profile" 
              className="w-24 h-24 rounded-full mx-auto mb-4 mt-2" 
            />
            <p>id: {profileData.id}</p>
            <p className="text-2xl font-bold mb-2">
              {profileData.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowersBox;
