import NoteItem from "./NoteItem";
import StatusBarGraph from "./StatusBarGraph";
import React, { useState, useEffect } from "react";
function NoteList({notes,deleteNote}){
    const [searchInput, setSearchInput] = useState("");
    const [filteredNotes, setFilteredNotes] = useState(notes);
    useEffect(() => {
        const result = notes.filter(
            (note) => note.title.toLowerCase().includes(searchInput.toLowerCase()) || note.content.toLowerCase().includes(searchInput.toLowerCase()));
            setFilteredNotes(result);
        }, [notes, searchInput]);
    const displayedNotes = [...filteredNotes].sort((a, b) => a.priority - b.priority);

    return (
         <div>
            <input type='text' placeholder='searh tasks' className="searchbox"value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            {/* <button onClick={handleSearch} className="search-btn">searchQuery</button> */}
            <div className="graph" style={{ width: '100%', maxWidth: 600, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
  <StatusBarGraph notes={filteredNotes} />
</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            
            <thead>
                <tr>
                    <th style={{border:"1px solid black",padding: "8px"}}>Title</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Content</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Date</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Time</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Status</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Priority</th>
                    <th style={{border:"1px solid black",padding: "8px"}}>Actions</th>
                </tr>
            </thead>
        
           <tbody>
            {displayedNotes.map((note) => (
            <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
          ))}
        </tbody>

        </table>
        </div>
    );
}
export default NoteList;