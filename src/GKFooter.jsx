import React from 'react';
 
const GKFooter=()=>{
    let year= new Date().getFullYear();
    return(
        
        <>
             <footer>
                 <p>Copyright © {year}</p>
             </footer>
        </>
    );
};
export default GKFooter;