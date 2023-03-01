import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Forms from "../Forms/Forms";
import Hudai from "../ActionBtn/ActionBtn";
import SplitBasicExample from "../SplitBasicExample/SplitBasicExample";
import "./MyModal.css";

function MyModal() {
    const [show, setShow] = useState(false);
    let DropDownVal="",
        dStatus = 0;
    const handleClose = () => {
        setshowVal("The money");
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const [showVal, setshowVal] = useState("The money");
    const [showVal2, setshowVal2] = useState("NO");

    let bigD = <h1>Please Enter the loan type</h1>;
    let bigD2;
    const added = (data) => {
        if (data == "LoanTaken") {
            DropDownVal = "Lender's";
            setshowVal2("Lender's");
            dStatus = 1;
        } else if (data == "LoanGiven") {
            DropDownVal = "Sender's";
            setshowVal2(DropDownVal);
            dStatus = 2;
        } 

        setshowVal(data);
        console.log(DropDownVal);
    };

    
         bigD2 = (
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{showVal2} Email address</Form.Label>

                    <Form.Control type="email" placeholder="name@example.com" autoFocus />
                    <Button variant="primary">Save Changes</Button>
                </Form.Group>

                {/* this is tk  */}
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter the Email address</Form.Label>

                    <Form.Control type="number" placeholder="Enter the amount" autoFocus />
                    <Button variant="primary">Save Changes</Button>
                </Form.Group>
            </Form>
        );
    
            console.log(dStatus)
    

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new{" "}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showVal}</Modal.Title>
                    <div className="">
                        <SplitBasicExample added={added}></SplitBasicExample>
                    </div>
                </Modal.Header>
                <Modal.Body>{(showVal !="The money")? bigD2 : bigD}</Modal.Body>
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
