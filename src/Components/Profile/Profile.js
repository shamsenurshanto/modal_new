import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = (props) => {
   console.log(props)
    let name1 = props.name.name;
    const url6 = `https://smoggy-toad-fedora.cyclic.app/api/user/getuser`;
    const [Profiledata, setProfiledata] = useState([]);
    const [ProfileName, setProfileName] = useState([]);
   
    

   

useEffect(() => {
    const add2 = async () => {
        console.log("added")
        const res = await  axios.post(url6, {
        
            "userEmailPhone": ProfileName
        
    },{withCredentials:true})
    .then((response) => {
        console.log(response.data);
    setProfiledata(response.data.data)
    setProfileName(name1);
    });

    console.log(Profiledata);

}
    add2(); 
 },[Profiledata]);
         

console.log(Profiledata);
  function setLogin(){
    
  }
    

 


    return (
        <div className="">
            <div className="profileClass border border-dark rounded">
                <h1>
                    <small className="text-primary"> Profile section</small>{" "}
                </h1>
            </div>
     
            <div className="d-flex justify-content-center  ">
            <div className="border border-dark rounded mt-3 w-100  d-flex justify-content-center">
                <div className="ProfileImg w-75 ms-2 mt-2 ">
                    <div className="">
                    <img className=""  src="https://th.bing.com/th/id/OIP.9B2RxsHDB_s7FZT0mljnhQHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7" className=""></img>
                    </div>
                  <div className=" d-flex justify-content-start">
                  <h6>Name: {props.id.userName}</h6>                 
                  </div>
                  <div className=" d-flex justify-content-start">
                  <h6>Email: {props.id.userEmail}</h6>                 
                  </div>

                  <div className=" d-flex justify-content-start">
                     <div className="text-center">
                     <h6>Phone number: {props.id.userPhone}</h6>
                     </div>                 
                  </div>

                  <div className=" d-flex justify-content-start">
                     <div className="text-center">
                     <h6>Amount : {props.name.amount}</h6>
                     </div>                 
                  </div>

                  <div className=" d-flex justify-content-start">
                     <div className="text-center">
                     <h6>Id : {props.id._id}</h6>
                     </div>                 
                  </div>

                  

                </div>
            </div>
            </div>
        </div>
    );
};


export default Profile;
