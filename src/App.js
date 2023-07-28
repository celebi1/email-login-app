// App.js
//Bu şekilde, "App" bileşeni, kullanıcının giriş durumuna bağlı olarak farklı bileşenleri render ederek, giriş yapma ve çıkış yapma işlemlerini yönetir.
// Kullanıcı giriş yaptığında "HomePage" gösterilir ve çıkış yaptığında "LoginPage" gösterilir.





import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => { //"App" adlı bir fonksiyonel bileşen tanımlar.
  const [isLoggedIn, setIsLoggedIn] = useState(false); //isLoggedIn" ve "setIsLoggedIn" adlı iki state tanımlar. "isLoggedIn", kullanıcının giriş durumunu (true veya false) tutar ve "setIsLoggedIn" işlevi ile güncellenir. Başlangıçta kullanıcının giriş yapmadığı varsayılır (false).

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? ( //Bu ternary ifadesi, "isLoggedIn" durumuna göre farklı JSX bloklarını render eder. Eğer kullanıcı giriş yapmışsa, "HomePage" bileşenini render eder; aksi takdirde "LoginPage" bileşenini render eder
        <HomePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
