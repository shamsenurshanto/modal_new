import axios from 'axios';
import { Modal } from 'bootstrap';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import MyModal from '../Components/MyModal/MyModal';



  
 const url1 = `https://smoggy-toad-fedora.cyclic.app/api/auth/login`;
 const url2 = `http://192.168.0.103:3000/api/transaction/alltypes`;
 const url3 = `http://192.168.0.103:3000/api/transaction/usersalltransactions`;
 const url4 = `https://smoggy-toad-fedora.cyclic.app/api/user/getuser`;
 const url5 = `https://smoggy-toad-fedora.cyclic.app/api/transaction/getsumofusers/63fc3d77847d6e54d113a686`;
 const url6 = `https://smoggy-toad-fedora.cyclic.app/api/user/getuser`;

  function Login() {
    const [LoginProductEmail, setLoginProductEmail] = useState([]);
    const [LoginProductPass, setLoginProductPass] = useState([]);
    const [loginPersonId,setloginPersonId]=useState(null);
    

    function getdataEmail(data){
        console.log(data.target.value)
        setLoginProductEmail(data.target.value);
  }

  function getdataPass(data){
    console.log(data.target.value)
    setLoginProductPass(data.target.value);

  }

  function setLogin(){
   
    axios.post(url1, {
      "userEmailPhone":LoginProductEmail,
      "userPass":LoginProductPass,
  },{withCredentials:true})
    .then((response) => {
      console.log(response.data.data._id);
      setloginPersonId(response.data.data._id)
    });



  }

  function setLogin2(){
   
    axios.get(url5,{withCredentials:true})
    .then((response) => {
      console.log(response);
    });



  }


  return (
    <div>
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
   <Button variant="contained" onClick={setLogin}>
     Submit
   </Button>
 </Form>

 <Button variant="contained"  onClick={setLogin2}>
     Submit
   </Button>

   {/* <Modal></Modal> */}
 </div>
 <MyModal id={loginPersonId} mail ={LoginProductEmail}></MyModal>
    </div>
  
  );
}

export default Login;