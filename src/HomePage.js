// HomePage.js

import React from 'react';

const HomePage = ({ onLogout }) => {
  return (
    <div>
      <h2>Hoş Geldin!</h2>
      <p>Giriş yaptın!</p>
      <button onClick={onLogout}>Çıkış Yap</button>
    </div>
  );
};

export default HomePage;
