// LoginPage.js

import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // E-posta ve şifre doğrulama işlemleri burada yapılabilir.
    // Örneğin, bir API'ye istek göndererek doğrulama yapabilirsiniz.
    // Burada sadece basit bir şifre doğrulaması yapacağız.

    if (email === 'clbceri@gmail.com' && password === '123456') {
      onLogin(); // Ana sayfaya geçiş yapmak için onLogin fonksiyonunu çağırıyoruz.
    } else {
      alert('Geçersiz e-posta veya şifre');
    }
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
