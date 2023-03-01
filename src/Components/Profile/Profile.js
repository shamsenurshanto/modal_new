import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = (props) => {
    console.log(props.name.name);
    let name1 = props.name.name;
    const url6 = `https://smoggy-toad-fedora.cyclic.app/api/user/getuser`;
    const [Profiledata, setProfiledata] = useState([]);
   

    const add2 = async () => {
        const res = await  axios.post(url6, {
        
            "userEmailPhone": name1
        
    },{withCredentials:true})
    .then((response) => {
        console.log(response.data.userEmail);
    setProfiledata(response.data.data)
    });

  

}

useEffect(() => {
    add2(); 
 },[]);
         

console.log(Profiledata._id);
  function setLogin(){
   
    



  }
    

   if(props.lentgh>0)
   {
    console.log("it is setlogin")
    setLogin();
   }



    return (
        <div>
            <div className="profileClass border border-dark rounded">
                <h1>
                    <small className="text-primary"> Profile section</small>{" "}
                </h1>
            </div>
     
            <div className="d-flex justify-content-center">
            <div className="border border-dark rounded mt-3 w-100 d-flex justify-content-center">
                <div className="ProfileImg w-75 ms-2 mt-2">
                    <div className="">
                    <img className=""  src="https://th.bing.com/th/id/OIP.9B2RxsHDB_s7FZT0mljnhQHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7" className=""></img>
                    </div>
                  <div className=" d-flex justify-content-start">
                  <h6>Name: {Profiledata.userName}</h6>                 
                  </div>
                  <div className=" d-flex justify-content-start">
                  <h6>Email: {Profiledata.userEmail}</h6>                 
                  </div>

                  <div className=" d-flex justify-content-start">
                     <div className="text-center">
                     <h6>Phone number: {Profiledata.userPhone}</h6>
                     </div>                 
                  </div>

                  

                </div>
            </div>
            </div>
        </div>
    );
};


export default Profile;
