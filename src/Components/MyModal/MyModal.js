import axios from "axios";
import { Dropdown } from "bootstrap";
import React, { useContext, useState } from "react";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Forms from "../Forms/Forms";
import Login from "../Login/Login";
import Products from "../Products";
import Button from "@mui/material/Button";


import SplitBasicExample from "../SplitBasicExample/SplitBasicExample";
import "./MyModal.css";
import { Globalinfo } from "../../App";

function MyModal(props) {
    console.log(props);
    const [show, setShow] = useState(false);
    const [showEmail, setshowEmail] = useState("");
    const [showAmount, setshowAmount] = useState(0);
    const url6 = `https://smoggy-toad-fedora.cyclic.app/api/user/getuser`;
    const url7 =`https://smoggy-toad-fedora.cyclic.app/api/transaction/createtransaction`;
    const url8 =`https://smoggy-toad-fedora.cyclic.app/api/transaction/usersalltransactions`;
    const url9 =`https://smoggy-toad-fedora.cyclic.app/api/transaction/createdtransactions`;
     const {Id,Mail} = useContext(Globalinfo)
    let urlForFilterarray=url8;
    let DropDownVal = "",
        dStatus = 0;
    const handleClose = () => {
        setshowVal("The money");
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        // console.log(data.target.value)
        const add2 = async () => {
            const res = await  axios.post(url6,{
                "userEmailPhone":showEmail
            },{withCredentials:true})
        .then((response) => {
            console.log(response);
      //  setProfiledata(response.data.data)
        });
    }
       add2()
    };
    const [showVal, setshowVal] = useState("The money");
    const [showVal2, setshowVal2] = useState("NO");
    const [showVal3, setshowVal3] = useState("");

    let bigD = <h1>Please Enter the loan type</h1>;
    let bigD2;
    const added = (data) => {
        if (data == "Loan Taken") {
            DropDownVal = "Lender's";
            setshowVal2("Lender's");
            dStatus = 1;
        } else if (data == "Loan Given") {
            DropDownVal = "Sender's";
            setshowVal2(DropDownVal);
            dStatus = 2;
        }

        setshowVal(data);
        console.log(DropDownVal);
    };
  
    function getdata(data) {
        console.log(data.target.value);
        setshowAmount(data.target.value);
      //  console.log(showAmount);
        // data.target.value = "";
    }
    function getdataMail(data) {
        console.log(data.target.value);
        setshowEmail(data.target.value);
       // console.log(showEmail);
        // data.target.value = "";
    }
    function setLogin(){
   
        axios.post(url6, {
            
                "userEmailPhone":showEmail
            
        },{withCredentials:true})
        .then((response) => {
          
          setshowVal3(response.data.data._id)
          console.log(response);
        });
    
    
    
      
    
             
    }

    function getdatasubmit() {
        console.log("hhshs");
       let type;
       let person= {
        "type":'',
        "amount":'',
        "sender":{
            "senderEmailPhone":'',
            "senderId":''
        },
        "senderStatus":"",
        "receiver":{
            "receiverEmailPhone":"",
            "receiverId":''
        },
        "receiverStatus":""
        
    } ;
       dStatus=1;
      
           if(dStatus==1)
           {
            //63efbef607ca4144957e03ef loan taken
            type="63efbef607ca4144957e03ef";
             person = {
                "type":type,
                "amount":showAmount,
                "sender":{
                    "senderEmailPhone":showEmail,
                    "senderId":showVal3
                },
                "senderStatus":"SENT",
                "receiver":{
                    "receiverEmailPhone":"",
                    "receiverId":Id
                },
                "receiverStatus":"ACKNOWLEDGED"
                
            }
           }
           else{
                //63efbf6207ca4144957e03f1 loan given
                type="63efbf6207ca4144957e03f1";
                person = {
                    "type":type,
                    "amount":showAmount,
                    "sender":{
                        "senderEmailPhone":Mail,
                        "senderId":Id
                    },
                    "senderStatus":"SENT",
                    "receiver":{
                        "receiverEmailPhone":"",
                        "receiverId":showVal3
                    },
                    "receiverStatus":"ACKNOWLEDGED"
                    
                }
           }

           const add2 = async () => {
            const res = await  axios.post(url7,person,{withCredentials:true})
        .then((response) => {
            console.log(response);
      //  setProfiledata(response.data.data)
        });
    }
       add2()
       handleClose()
       console.log(person);
    }
    

     const getalltransaction = async () => {
            urlForFilterarray=url8;
            console.log(urlForFilterarray)
        };
        const MYCreatedTransaction = async () => {
            urlForFilterarray=url9;
            console.log(urlForFilterarray)
        };

  
  console.log(showVal3 +" " + Id + " " + Mail);
    bigD2 = (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{showVal2} Email address</Form.Label>

                <div className="d-flex justify-content-center Email_btn">
                    <Form.Control type="email" placeholder="name@example.com" onChange={getdataMail}  autoFocus />
                    <Button className="w-25" variant="contained" onClick={setLogin}>
                        Search
                    </Button>
                </div>
            </Form.Group>

            {/* this is tk  */}
            <Form.Group className="mt-5" controlId="exampleForm.ControlInput1">
                <div className="d-flex justify-content-center Email_btn">
                    {/* <Form.Control type="Number" placeholder="Enter the amount" onChange={getdata} autoFocus /> */}
                    <input type="Number" className="form-control inputName" placeholder="Enter the amount" onChange={getdata} autoFocus></input>
                    <Button className="w-25" variant="contained" >
                        Submit
                    </Button>
                </div>
                <div></div>
            </Form.Group>
        </Form>
    );

    // console.log(dStatus)

    return (
        <div className="">
            <div className="d-flex justify-content-end m-5 mt-5">
                <div className="">
                    <Button className=" m-2" variant="contained" onClick={handleShow}>
                        <i class="fa fa-plus" aria-hidden="true"></i>Add new{" "}
                    </Button>

                    <Button className="m-1 "variant="contained" onClick={getalltransaction}>
                        All Transaction
                    </Button>

                    <Button className="m-1" variant="contained" onClick={MYCreatedTransaction} >
                        My Transaction{" "}
                    </Button>
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{showVal}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="SplitBasicExampleclass w-100">
                                <SplitBasicExample added={added}></SplitBasicExample>
                            </div>

                            {showVal != "The money" ? bigD2 : bigD}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="contained"   onClick={getdatasubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                </div>
               
            </div>
            <div className="">
              {/* <Login></Login> */}
                <Products  ></Products>
            </div>
            
        </div>
    );
}

export default MyModal;
