import { useState } from "react";
 
function NoteForm({ addNote}){
    const [note,setNote] = useState({
        title:"note 1",
        status:"open"
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        //if(!note.trim()) return;
        addNote(note);
        //setNote("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter note"  value={note.title} onChange={(e) => setNote({...note,title:e.target.value})}/>
           {/* <input value={note.status} onChange={(e) => setNote({...note,status:e.target.value})} /> */}
            <label>status</label><input type="checkbox" onChange={(e) =>setNote({...note,status:e.target.checked ? "closed" : "open"})}/>
            <button>Add</button>        
        </form>
    );
}

export default NoteForm;