import NoteItem from "./NoteItem";
function NoteList({notes,deleteNote}){
    return (
        <ul>
            {notes.map((note) =>(
                <NoteItem class="note-item" key={note.id} note={note} deleteNote={deleteNote}/>

            ))}

        </ul>
    );
}
export default NoteList;