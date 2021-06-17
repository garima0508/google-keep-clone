import React from 'react';
 
import logo from './images/logo.png';
const GKHeader=()=>{
    return(
        <>
           <div className='header'>
               <img src={logo} alt="logo"/>
               <header>Keep</header>
           </div>
        </>
    );
};
export default GKHeader;