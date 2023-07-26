import axios from 'axios';

const baseUrl = "http://localhost:5000/users"

export const isLogin = async (data) => {

  console.log("kekwedhlewıhe")

const url  = baseUrl+"/login"



  const res = await axios.post(url, data);
  return res;
debugger;
  console.log("hocaammmm")
  console.log(res)

    // let data = JSON.stringify({
    //     "email": "clbceri@gmail.com",
    //     "password": "123"
    //   });
      
//       let config = {
//         method: 'post',
//         mode: 'no-cors',
//         maxBodyLength: Infinity,
//         url: 'http://localhost:5000/users/login',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         data : data
//       };
      
//       axios.request(config)
//       .then((response) => {
//         console.log(JSON.stringify("response.data"));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
}
