import React, { useContext } from 'react';
import { Globalinfo } from '../App';


const Blogs = () => {
    const {appColor} = useContext(Globalinfo)

    console.log("  ",appColor);

    return (
        <div>
            <h1 >hello its  blog </h1>
        </div>
    );
};

export default Blogs;