import React, { useState } from 'react';
import '../App.css';
import ConfirmModal from './confirmModal';
function NoteItem({note,deleteNote}){
    const [showModal, setShowModal] = useState(false);
    const handleDeleteClick = () => {
        setShowModal(true);
    };
    const handleConfirm = async () => {
    try {
        await fetch(`http://localhost:8080/notes/${note.id}`, {
            method: 'DELETE',
        });
        deleteNote(note.id);
        console.log(note.id);
        setShowModal(false);
    } catch (error) {
        console.error("Error deleting note:", error);
    }
};
    const handleCancel = () => {
        setShowModal(false);
    };
    
    return(
        <>
        <tr style={{border:"1px solid black",padding: "8px"}}>
            <td style={{border:"1px solid black",padding: "8px"}}>{note.title}</td>
            <td style={{border:"1px solid black",padding: "8px"}}>{note.content}</td>
            <td style={{border:"1px solid black",padding: "8px"}}>{note.date}</td>
            <td style={{border:"1px solid black",padding: "8px"}}>{note.time}</td>
            <td style={{border:"1px solid black",padding: "8px"}}>{note.status}</td>
            <td style={{border:"1px solid black",padding: "8px"}}>{note.priority}</td>
            <td style={{border:"1px solid black",padding: "8px"}}><button className="delete-btn" onClick={handleDeleteClick}>Delete</button></td>
        </tr>
        {showModal && (
        <ConfirmModal
          message="Are you sure you want to delete this note?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      </>
    );
}
export default NoteItem;
