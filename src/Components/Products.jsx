import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'bootstrap';
import axios from 'axios';



const Products = () => {
    const [ProductItems, setProductItems] = useState([]);
    const [FilteredProductItems, setFilteredProductItems] = useState([]);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState("");
    
     const add2 = async( )=>{
      const res = await axios.get("https://smoggy-toad-fedora.cyclic.app/api/transaction/usersalltransactions",{withCredentials:true})
      setProductItems(res.data.data);
      let resdata= res.data.data;
      let emailname,amount,type;  let products=[];
      resdata.map((data)=>{
        console.log(data.sender);
        emailname=data.sender.senderEmailPhone;
        amount=data.amount;
        type=data.type;
      
        if(type=='63efbef607ca4144957e03ef')
        {
          type='Loan Taken'
        }
        else{
          type='Loan Given'
        }
        let product = {'name':{emailname},'amount':{amount}, 'type':{type}}
        products.push(product)
        console.log(products)
      })
     
      setFilteredProductItems(resdata);
      console.log(res.data.data)
     }

    useEffect(() => {
        
      add2()
            console.log("chng")
            
    }, []);
   
  
    
    useEffect(() => {
      console.log(search)
     let result = FilteredProductItems.filter((data)=>{
      console.log(data)
          return ( data.sender.senderEmailPhone.toLowerCase().match(search.toLowerCase()))
      });
      setFilteredProductItems(result)
      console.log(result)
      if(FilteredProductItems.length==0 || search.length==0)
      add2()
  }, [search]);
  console.log(FilteredProductItems.length)
    const mystyle = {
        color: "white",
        
        padding: "10px",
        fontFamily: "Arial",
        width: "70px",
        borderRadius : "50%"
      };

      const mystyle3 = {
        
        
      };


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
        // color: "Black",
        // fontFamily: `cursive`,
        // fontWeight: `bold`,
       
       

        // padding: "10px",
        // fontFamily: "Arial",
        // width: "70px",
        // borderRadius : "50%"
      };
  //     function setLogin(){
   
  //       axios.post("https://smoggy-toad-fedora.cyclic.app/api/auth/login", {
            
  //               "userEmailPhone":"ab99@gmail.com",
  //               "userPass":"12345678"
            
  //       },{withCredentials:true})
  //       .then((response) => {
  //         console.log(response);
  //       });
    
    
    
  //     }

  //  setLogin()
  console.log(FilteredProductItems)
  
 
    const col = [
        {
            name : <p style={mystyle2} className="font-weight-bold" >Email or Phone </p>,
            selector: (row) => <p style={mystyle2} className="font-weight-bold" onClick={()=> console.log(row)}>{row.sender.senderEmailPhone}</p> ,
            // cell : (row) => (
            //     <button type="button" style={mystyle3} onClick={()=> console.log(row)} class="btn btn-primary">Primary</button>
            // )
        },
        {
            name : <p style={mystyle2} className="font-weight-bold">Amount</p> ,
            selector: (row) => <p style={mystyle2} className="font-weight-bold" onClick={()=> console.log(row)}>{row.amount}</p> 
        },
        {
            name : <p style={mystyle2} className="font-weight-bold">Type</p>,
            selector: (row) => <p style={mystyle2} className="font-weight-bold" onClick={()=> {
              console.log(row.type);
              
            }} >{row.type}</p> 
            
        },
        {
            name : <p className="font-weight-bold">Country capital</p>,
            selector: (row) => <div className='myimg' onClick={()=> console.log(row)}>
                <img style={mystyle} src={row.flag} className="font-weight-bold d-flex justify-content-end "  /> 
                {
                //    console.log( document.getElementById('sc-hLBbgP') )
                //    console.log(document.getElementsByClassName('sc-hLBbgP'))
                
                }
            </div>
        }
    ]
   
  
    return (
      <DataTable  columns={col} data={FilteredProductItems}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='550px'
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input type="text" placeholder='Search here' className='form-control w-25' value={search} onChange={(e)=>{
          console.log(search +" "+ FilteredProductItems)
          setSearch(e.target.value)}}  ></input>    
        
        
      }

      onRowClicked={(row) => console.log(row)}
     
    
      
      
      ></DataTable>
    );
};


export default Products;