import axios from "axios";
import { useState } from "react";
 
function NoteForm({ addNote}){
    const [note,setNote] = useState({
        title:"note 1",
        content:"",
        status:"open"
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        //if(!note.trim()) return;
        sendPostRequest(note);
        addNote(note);
        //setNote("");
    };
    const sendPostRequest = (note)=>{
     axios.post("http://localhost:3001/notes",note,{
        headers:{
            "content-type":"application/json",
        },
    })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter the title"  value={note.title} onChange={(e) => setNote({...note,title:e.target.value})}/>
           {/* <input value={note.status} onChange={(e) => setNote({...note,status:e.target.value})} /> */}
            <input placeholder="enter the content" value={note.content} onChange={(e) => setNote({...note,content:e.target.value})}/>
            <label>status</label><input type="checkbox" onChange={(e) =>setNote({...note,status:e.target.checked ? "closed" : "open"})}/>
            <button>Add</button>        
        </form>
    );
}

export default NoteForm;