import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Forms from "../Forms/Forms";

import SplitBasicExample from "../SplitBasicExample/SplitBasicExample";
import "./MyModal.css";

function MyModal() {
    const [show, setShow] = useState(false);
    const [showEmail, setshowEmail] = useState("");
    let DropDownVal = "",
        dStatus = 0;
    const handleClose = () => {
        setshowVal("The money");
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
        // console.log(data.target.value)
    };
    const [showVal, setshowVal] = useState("The money");
    const [showVal2, setshowVal2] = useState("NO");

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
        setshowEmail(data.target.value);
        console.log(showEmail);
        // data.target.value = "";
    }

    function getdatasubmit(data) {
        console.log(data.target.value);
        setshowEmail(data.target.value);
        console.log(showEmail);

       
    }

    bigD2 = (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{showVal2} Email address</Form.Label>

                <div className="d-flex justify-content-center Email_btn">
                    <Form.Control type="email" placeholder="name@example.com" autoFocus />
                    <Button className="w-25" variant="primary">
                        Search
                    </Button>
                </div>
            </Form.Group>

            {/* this is tk  */}
            <Form.Group className="mt-5" controlId="exampleForm.ControlInput1">
                <div className="d-flex justify-content-center Email_btn">
                    {/* <Form.Control type="Number" placeholder="Enter the amount" onChange={getdata} autoFocus /> */}
                    <input type="Number" className="form-control inputName" placeholder="Enter the amount" onChange={getdata} autoFocus></input>
                    <Button className="w-25" variant="primary" onClick={getdatasubmit}>
                        Submit
                    </Button>
                </div>
                <div></div>
            </Form.Group>
        </Form>
    );

    // console.log(dStatus)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new{" "}
            </Button>

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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    );
}

export default MyModal;
