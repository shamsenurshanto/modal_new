import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'bootstrap';
import axios from 'axios';



const Products = () => {
    const [ProductItems, setProductItems] = useState([]);
    const [cart, setCart] = useState("no image");
    let valuee;
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then((res) => res.json())
            .then((data) => setProductItems(data));
    }, []);
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
    console.log(ProductItems)
    const col = [
        {
            name : <p style={mystyle2} className="font-weight-bold" >Country Name</p>,
            selector: (row) => <p style={mystyle2} className="font-weight-bold" onClick={()=> console.log(row)}>{row.name}</p> ,
            // cell : (row) => (
            //     <button type="button" style={mystyle3} onClick={()=> console.log(row)} class="btn btn-primary">Primary</button>
            // )
        },
        {
            name : <p style={mystyle2} className="font-weight-bold">Country callingCodes</p> ,
            selector: (row) => <p style={mystyle2} className="font-weight-bold" onClick={()=> console.log(row)}>{row.callingCodes}</p> 
        },
        {
            name : <p style={mystyle2} className="font-weight-bold">Country capital</p>,
            selector: (row) => <p style={mystyle2} className="font-weight-bold" onClick={()=> console.log(row)} >{row.capital}</p> 
            
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
      <DataTable  columns={col} data={ProductItems}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='550px'
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input type="text" placeholder='Search here' className='form-control w-25'  ></input>
        
        
      }
      onRowClicked={(row) => console.log(row)}
     
    
      
      
      ></DataTable>
    );
};

export default Products;