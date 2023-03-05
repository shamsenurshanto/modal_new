import axios from 'axios';
import { Button } from 'bootstrap';
import React from 'react';

const ActionBtn = () => {


    function setLogin2(){
   
        axios.get("https://smoggy-toad-fedora.cyclic.app/api/transaction/alltransaction",{withCredentials:true})
        .then((response) => {
          console.log(response);
        });
    
    
    
      }



    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={setLogin2}>All Transaction</button>
        </div>
    );
};

export default ActionBtn;