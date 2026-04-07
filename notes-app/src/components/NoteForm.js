import axios from "axios";
import { useState } from "react";
import '../App.css';
function NoteForm({ addNote}){
    const [note,setNote] = useState({
        title:"note 1",
        content:"",
        date :"",
        time:"",
        priority:5
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
        <form className="note-form"onSubmit={handleSubmit}>
            <input className="note-input" placeholder="Enter the title"  value={note.title} onChange={(e) => setNote({...note,title:e.target.value})}/>
           {/* <input value={note.status} onChange={(e) => setNote({...note,status:e.target.value})} /> */}
            <input className="note-input" placeholder="enter the content" value={note.content} onChange={(e) => setNote({...note,content:e.target.value})}/>
            
            <input className="note-input" type="datetime-local" onChange={(e) => { const value = e.target.value; const [date, time] = value.split("T"); setNote({ ...note, date, time });}}/>
            <label>Priority</label><input className="note-inputrange" type="range" min="1" max="20" value={note.priority} onChange={(e) => setNote({ ...note, priority: parseInt(e.target.value) })}/>
            <button className="add-btn">Add</button>        
        </form>
    );
}

export default NoteForm;