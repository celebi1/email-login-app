// LoginPage.js

import React, { useState } from 'react';

import {isLogin} from "./network/service"
import SuccessPage from './SuccessPage';




const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // E-posta ve şifre doğrulama işlemleri burada yapılabilir.
  //   // Örneğin, bir API'ye istek göndererek doğrulama yapabilirsiniz.
  //   // Burada sadece basit bir şifre doğrulaması yapacağız.

  //   if (email === 'clbceri@gmail.com' && password === '123456') {
  //     onLogin(); // Ana sayfaya geçiş yapmak için onLogin fonksiyonunu çağırıyoruz.
  //   } else {
  //     alert('Geçersiz e-posta veya şifre');
  //   }
  // };


  const handleLogin = async () => {
    const data = {
      "email" : email,
      "password": password
    }
    console.log("celebiiii")
    debugger;
    const res = await isLogin (data);

    console.log("res")
    console.log(res)
     if(res.data.status=== 200){
      
      <SuccessPage/>
     }


    
    
      }

      
      
      
      
      




  return (
    <div>
      <h2>Giriş Yap</h2>
      <form >
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
        <button onClick={handleLogin} type="button">Giriş Yap</button>
      </form>
    </div>
  );
};


export default LoginPage;
