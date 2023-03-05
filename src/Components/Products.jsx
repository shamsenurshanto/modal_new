import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";

import axios from "axios";
import Profile from "./Profile/Profile";

const Products = (props) => {
   console.log(props);
    const [ProductItems, setProductItems] = useState([]);
    const [FilteredProductItems, setFilteredProductItems] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState("");
    const [Profiledata, setProfiledata] = useState([]);
    const [show, setShow] = useState(false);
    const [showEmail, setshowEmail] = useState("");
    const [showAmount, setshowAmount] = useState(0);
    const url6 = `https://smoggy-toad-fedora.cyclic.app/api/user/getuser`;
    const url7 =`https://smoggy-toad-fedora.cyclic.app/api/transaction/createtransaction`;
   // url7=props.urlname;
  //profile data; 
  let profileValue ;
    const add2 = async () => {
        const res = await axios.get("https://smoggy-toad-fedora.cyclic.app/api/transaction/usersalltransactions", { withCredentials: true });
        setProductItems(res.data.data);
        let resdata = res.data.data;
        let emailname, amount, type;
        let products = [];
        resdata.map((data) => {
            console.log(data);
            emailname = data.sender.senderEmailPhone;
            amount = data.amount;
            type = data.type;

            if (type == "63efbef607ca4144957e03ef") {
                type = "Loan Taken";
            } else {
                type = "Loan Given";
            }
            let product = { name: emailname, amount: amount, type: type };
            products.push(product);
            console.log(products);
        });

        setFilteredProductItems(products);
        console.log(products);
        console.log(res.data.data);
    };

    useEffect(() => {
        add2();
        console.log("chng");
    }, []);

    useEffect(() => {
        console.log(search);
        let result = FilteredProductItems.filter((data) => {
            console.log(data);
            return data.name.toLowerCase().match(search.toLowerCase());
        });
        setFilteredProductItems(result);
        console.log(result);
        if (FilteredProductItems.length == 0 || search.length == 0) add2();
    }, [search]);
    console.log(FilteredProductItems.length);
    const mystyle = {
        color: "white",

        padding: "10px",
        fontFamily: "Arial",
        width: "50px",
        height:'50px',
        borderRadius: "50%",
    };

    const mystyle3 = {};

    const mystyle2 = {
        color: "Black",
        fontFamily: `cursive`,
        fontWeight: `bold`,

        // padding: "10px",
        // fontFamily: "Arial",
        // width: "70%",
        // borderRadius : "50%"
    };

    const myimg = {
        color: "Black",
        fontFamily: `cursive`,
        fontWeight: `bold`,
        padding: "10px",
        fontFamily: "Arial",
        width: "70px",
        borderRadius : "50%"
    };
    



    let pro
    console.log(FilteredProductItems);
    const getalltransaction = async () => {
       
        const res = await axios.get("https://smoggy-toad-fedora.cyclic.app/api/transaction/usersalltransactions", { withCredentials: true });
        console.log(res);
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


    const col = [
        {
            name: (
                <p style={mystyle2} className="font-weight-bold">
                    Email or Phone{" "}
                </p>
            ),
            selector: (row) => (
                <p style={mystyle2} className="font-weight-bold" onClick={() => console.log(row)}>
                    {row.name}
                </p>
            ),
            // cell : (row) => (
            //     <button type="button" style={mystyle3} onClick={()=> console.log(row)} class="btn btn-primary">Primary</button>
            // )
        },
        {
            name: (
                <p style={mystyle2} className="font-weight-bold">
                    Amount
                </p>
            ),
            selector: (row) => (
                <p style={mystyle2} className="font-weight-bold" onClick={() => console.log(row)}>
                    {row.amount}
                </p>
            ),
        },
        {
            name: (
                <p style={mystyle2} className="font-weight-bold">
                    Type
                </p>
            ),
            selector: (row) => (
                <p style={mystyle2} className="font-weight-bold" onClick={() => console.log(row)}>
                    {row.type}
                </p>
            ),
        },
        {
            name: <p className="font-weight-bold">Country capital</p>,
            selector: (row) => (
                <div className="myimg" onClick={() => console.log(row)}>
                    <img style={mystyle} src="https://th.bing.com/th/id/OIP.9B2RxsHDB_s7FZT0mljnhQHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7" className="font-weight-bold d-flex justify-content-end " />
                    {
                        //    console.log( document.getElementById('sc-hLBbgP') )
                        //    console.log(document.getElementsByClassName('sc-hLBbgP'))
                    }
                </div>
            ),
        },
    ];

    return (
       <div>
        
         <div className="d-flex justify-content-end">

<div  className="w-25 ">
 <Profile name={Profiledata} id={cart}></Profile>
</div>

<div className="w-75">

<DataTable
 columns={col}
 data={FilteredProductItems}
 pagination
 fixedHeader
 fixedHeaderScrollHeight="550px"
 highlightOnHover
 subHeader
 subHeaderComponent={
     <input
         type="text"
         placeholder="Search here"
         className="form-control w-25"
         value={search}
         onChange={(e) => {
             console.log(search + " " + FilteredProductItems);
             setSearch(e.target.value);
         }}
     ></input>
 }
 onRowClicked={(row) => {
        console.log(row);
        const add3 = async () => {
            const res = await  axios.post(url6,{
                "userEmailPhone":row.name
            },{withCredentials:true})
        .then((response) => {
            console.log(response.data.data._id);
      //  setProfiledata(response.data.data)
      setCart(response.data.data);
        });
    }
    

   
   add3()

     setProfiledata(row);
     console.log(Profiledata);

 }}
></DataTable>
</div>

</div>
       </div>
    );
};

export default Products;
