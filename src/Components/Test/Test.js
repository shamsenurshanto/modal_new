import React, { useState } from 'react';
import {  createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()


const Test = () => {
    const [user, setUser] = useState("Jesse Hall");
    return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
         
        </UserContext.Provider>
      );
};

export default Test;