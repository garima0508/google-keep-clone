import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddIcon from '@material-ui/icons/Add';

const GKCreateNote =(props)=>{
    const [note,setNote]= useState({
        title:'',
        content:''
    });
    const [expand,setExpand]=useState(false);
    const ExpandIt=()=>{
        setExpand(true);
    };
    const ContractIt=()=>{
        setExpand(false);
    };
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setNote((preData)=>{
            return{
                ...preData,
                [name]:value
            }
        })
        
    };
    const addEvent=(event)=>{
        event.preventDefault();
        props.passNote(note);
        setNote({
            title:'',
            content:''
        });
    };
    return (
        <>
         <div className='main_note' onDoubleClick={ContractIt}>
             <form>
                 {expand?<input type="text" placeholder='Title' autoComplete='off' onChange={InputEvent} value={note.title} name='title'/>:null}
                 <textarea onClick={ExpandIt} placeholder='Write a note...' cols="" rows="" onChange={InputEvent} value={note.content} name='content'></textarea>
                 {expand?<button onClick={addEvent} className='root'>
                     <AddIcon className='plus_sign'/>
                 </button>:null}
             </form>
         </div>
        </>
    );
};
export default GKCreateNote;