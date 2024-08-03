import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';


const FollowersBox = () => {
  const [profileUrl, setProfileUrl] = useState('priya-kumari-5402a6287/');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfileData = async () => {
    if (!profileUrl) {
      alert("Please enter a LinkedIn profile URL");
      return;
    }
  
    const apiKey = 'df16a8cbdfmsh1792088bb0ab5c0p1f690ajsndfa1d85ddd7f'; // Replace with your RapidAPI key
    const url = 'https://linkedin-bulk-data-scraper.p.rapidapi.com/person';

    try {
      const response = await axios.post(url, 
        { link: `https://www.linkedin.com/in/${profileUrl}/` }, 
        {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'linkedin-bulk-data-scraper.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)
      setProfileData(response.data.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data from LinkedIn API');
      setProfileData(null);
      console.error('Error fetching data', error);
    }
  };
  
  useEffect(()=>{
     fetchProfileData();
  },[])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-64 p-6 bg-blue-500 text-white text-center rounded-lg">
       
        <input
          type="text"
          placeholder="Enter LinkedIn Profile URL"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          className="mb-4 p-2 rounded"
        />
        <button onClick={fetchProfileData} className="bg-white text-blue-500 px-4 py-2 rounded">
          Search
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {profileData && (
          <div className="text-center">
            <img 
              src={profileData.profilePic} // Adjust based on actual API response
              alt="Profile" 
              className="w-24 h-24 rounded-full mx-auto mb-4 mt-2" 
            />
            <p className="text-2xl font-bold mb-2">
              {profileData.fullName} 
            </p>
            <p>{profileData.headline}</p>
            <p>Country:{profileData.addressCountryOnly}</p>
            <p>Total Connections: {profileData.followers} </p>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default FollowersBox;
