import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


  
 const url1 = `http://192.168.0.103:3000/api/auth/login`;
 const url2 = `http://192.168.0.103:3000/api/transaction/alltypes`;
 const url3 = `http://192.168.0.103:3000/api/transaction/usersalltransactions`;

  function Login() {
    const [LoginProductEmail, setLoginProductEmail] = useState([]);
    const [LoginProductPass, setLoginProductPass] = useState([]);

    function getdataEmail(data){
        console.log(data.target.value)
        setLoginProductEmail(data.target.value);
  }

  function getdataPass(data){
    console.log(data.target.value)
    setLoginProductPass(data.target.value);

  }

  function setLogin(){
   
    axios.get(url3, {
        
            "userEmailPhone":"ab99@gmail.com",
            "userPass":"12345678"
        
    },{withCredentials:true})
    .then((response) => {
      console.log(response);
    });



  }

  function setLogin2(){
   
    axios.get("http://192.168.0.103:3000/api/transaction/alltypes",{withCredentials:true})
    .then((response) => {
      console.log(response);
    });



  }


  return (
    <div className='w-25 logindiv' >
        <Form>
      <Form.Group onChange={getdataEmail} className="mb-3" controlId="formBasicEmail">
        <Form.Label  name="email">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group onChange={getdataPass} className="mb-3" controlId="formBasicPassword">
        <Form.Label name="pass">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button  onClick={setLogin}>
        Submit
      </Button>
    </Form>

    <Button  onClick={setLogin2}>
        Submit
      </Button>
    </div>
  );
}

export default Login;