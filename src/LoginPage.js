// LoginPage.js
//bu kod bir React bileşeni olan "LoginPage" bileşenini tanımlıyor. 
//Bu bileşen, kullanıcıların e-posta ve şifre bilgilerini girdikten sonra giriş yapmalarını sağlayan bir giriş sayfasıdır. 
//Kod, kullanıcının giriş yapma işlemini doğrulamak için bir API'ye istek gönderiyor ve sonucuna göre kullanıcıyı başarılı sayfaya yönlendiriyor.

import React, { useState } from "react";

import { isLogin } from "./network/service";
import SuccessPage from "./SuccessPage";

const LoginPage = ({ onLogin }) => { //LoginPage" adlı bir fonksiyonel bileşen tanımlar. Bileşen, "onLogin" adlı bir prop alır, bu prop kullanıcının başarılı bir şekilde giriş yaptığında çağrılacak bir işlevi temsil eder.
  const [email, setEmail] = useState(""); //IsLoge" ve "setIsLoge" adlı iki state tanımlar. "IsLoge", kullanıcının başarılı bir şekilde giriş yapmasını (true) veya başarısız olmasını (false) tutar. "setIsLoge" işlevi ile güncellenir.
  const [IsLoge, setIsLoge] = useState(false); //password" ve "setPassword" adlı iki state tanımlar. "password" kullanıcının girdiği şifreyi tutar ve "setPassword" işlevi ile güncellenir.
  const [password, setPassword] = useState(""); //handleLogin" adlı bir asenkron işlev tanımlar. Bu işlev, kullanıcının giriş yapma butonuna tıkladığında çağrılır.

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

  const handleLogin = async () => { //handleLogin" adlı bir asenkron işlev tanımlar. Bu işlev, kullanıcının giriş yapma butonuna tıkladığında çağrılır.

   // İşlev içinde, isLogin fonksiyonunu kullanarak kullanıcının e-posta ve şifre bilgilerini içeren bir nesne oluşturur ve bu nesneyi isLogin fonksiyonuna gönderir.
    
   const data = {
      email: email,
      password: password,
    };
    console.log("celebiiii");
    const res = await isLogin(data); //API isteğini bekleyen "isLogin" işlevini çağırır ve sonucu res değişkenine atar. 
    setIsLoge(true) // Kullanıcının başarılı bir şekilde giriş yaptığını belirten "IsLoge" durumunu "true" olarak günceller.
    console.log("res");
    console.log(res);
  };
  return (
    <div>
      <h2>Giriş Yap</h2>
      <form>
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
        <button onClick={handleLogin} type="button"> 
          Giriş Yap 
        </button> 
        {IsLoge && <SuccessPage />}
      </form>
    </div>
  );
};
//: Giriş yapma butonu. Kullanıcı tıkladığında "handleLogin" işlevini çağırır.
// isLoge" durumu "true" ise, "SuccessPage" bileşenini gösterir. Bu sayede kullanıcı başarılı bir şekilde giriş yaptığında "SuccessPage" bileşenine yönlendirilir.
export default LoginPage;
