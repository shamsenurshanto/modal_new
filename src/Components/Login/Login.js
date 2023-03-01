import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


  
 const url1 = `https://smoggy-toad-fedora.cyclic.app/api/auth/login`;
 const url2 = `https://smoggy-toad-fedora.cyclic.app/api/transaction/alltypes`;
 const url3 = `https://smoggy-toad-fedora.cyclic.app/api/transaction/usersalltransactions`;

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
   
    axios.post("https://smoggy-toad-fedora.cyclic.app/api/auth/login", {
        
            "userEmailPhone":"ab99@gmail.com",
            "userPass":"12345678"
        
    },{withCredentials:true})
    .then((response) => {
      console.log(response);
    });



  }

  function setLogin2(){
   
    axios.get("https://smoggy-toad-fedora.cyclic.app/api/transaction/alltransaction",{withCredentials:true})
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