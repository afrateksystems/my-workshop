import NoteItem from "./NoteItem";
import React, { useState } from "react";
function NoteList({notes,deleteNote}){
    const [searchInput, setSearchInput] = useState(""); 
    const [filteredNotes, setFilteredNotes] = useState(notes);
    const handleSearch = () => {
        const result = notes.filter((note) =>note.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        note.content.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredNotes(result);
  };

    return (
         <div>
            <div className="searchtask">
            <input type='text' placeholder='searh tasks' className="searchbox"value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <button onClick={handleSearch} className="search-btn">searchQuery</button>
            </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            
            <thead>
                <tr>
                    <th style={{border:"1px solid black",padding: "8px"}}>Title</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Content</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Date</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Time</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Priority</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Actions</th>
                </tr>
            </thead>
        
           <tbody>

          {(searchInput ? filteredNotes : notes).map((note) => (
            <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
          ))}
        </tbody>

        </table>
        </div>
    );
}
export default NoteList;