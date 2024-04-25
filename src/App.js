import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Set withCredentials to true for all Axios requests
    axios.defaults.withCredentials = true;

    // Check if the user is already logged in
    axios.get('https://api.stru.ai/check_login')
      .then(response => {
        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        console.error('Error checking login status:', error);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = 'https://api.stru.ai/login';
  };

  return (
    <div>
      <h1>Landing Page</h1>
      {isLoggedIn ? (
        <p>You are already logged in. <a href="https://haikuapp.netlify.app">Go to App</a></p>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default Landing;
