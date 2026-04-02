import '../App.css';
function NoteItem({note,deleteNote}){
    return(
        <li class="note-item">
            {note.title} , {note.status}
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
    );
}
export default NoteItem;
