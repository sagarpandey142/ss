import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TwitterProfileFetcher = () => {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState('PriyaKu78756722'); // Use a separate state for the username

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://twitter-api45.p.rapidapi.com/screenname.php', {
        params: { screenname: username },
        headers: {
          'X-RapidAPI-Key': 'df16a8cbdfmsh1792088bb0ab5c0p1f690ajsndfa1d85ddd7f', // Replace with your actual RapidAPI key
          'X-RapidAPI-Host': 'twitter-api45.p.rapidapi.com'
        }
      });
      console.log("re",response)
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching Twitter data:', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, [username]);
  console.log("profile",profile)
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-64 p-6 bg-blue-500 text-center rounded-lg shadow-lg">
        {/* <FaXTwitter className='text-3xl mx-auto mt-1 pb-1 text-white' /> */}
        <input
          type="text"
          placeholder="Enter Twitter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 rounded border-none"
        />
        <button onClick={fetchUserData} className="bg-white text-blue-500 px-4 py-2 rounded shadow">
          Search
        </button>
        {profile && (
          <div className="mt-4">
            <img 
              className="w-24 h-24 rounded-full mx-auto mb-4" 
              src={profile.avatar} 
              alt={profile.name} 
            />
            <h2 className="text-lg font-bold text-white">{profile.name} (@{profile.profile})</h2>
            <p className="text-white">Status: {profile.status}</p>
            <p className="text-white">Followers: {profile.friends}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwitterProfileFetcher;
