import React, { useState } from 'react';


import GKHeader from './GKHeader';
import GKFooter from './GKFooter';
import GKCreateNote from './GKCreateNote';
import GKNote from './GKNote';
import './GK.css';
const GKApp=()=>{
  const [addNotes, setAddNotes]=useState([]);
  const addNote=(note)=>{
    setAddNotes((preNotes)=>{
       return[...preNotes,note]
    });
    
  };
  const onDelete=(id)=>{
      setAddNotes((preNotes)=>{
        return preNotes.filter((val,index)=>{
          return id!==index;
        })
      }
    );
  };
   return(
     <>
        <GKHeader/>
        <GKCreateNote passNote={addNote}/>
        {addNotes.map((val,index)=>{
          return(
          <GKNote
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteNote={onDelete}
           />
           );
        })}
        <GKFooter/>
     </>
   );
};
export default GKApp;