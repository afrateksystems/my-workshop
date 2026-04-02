import { useState } from "react";

function NoteForm({ addNote}){
    const [note,setNote] = useState({
        title:"my note",
        status:"created"
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        //if(!note.trim()) return;
        addNote(note);
        //setNote("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter note" value={note.title} onChange={(e) => setNote({title:e.target.value})}/>
            <input value={note.status} onChange={(e) => setNote({title:e.target.value})} />
            <button>Add</button>        
        </form>
    );
}

export default NoteForm;