// it is a file based app 
// it has features like create,read,update,delete notes stored in JSON
const fs = require('fs').promises;
const FILE = 'notes.json';
//ensuring the fie exists 
async function init(){
    try{
        await fs.access(FILE);
    } catch{
        await fs.writeFile(FILE,JSON.stringify([]));
    }
}
//read all notes
async function getNotes(){
    const data = await fs.readFile(FILE,'utf8');
    return JSON.parse(data);
}
//save notes
async function saveNotes(notes){
    await fs.writeFile(FILE,JSON.stringify(notes,null,2));
}

//creating note
async function addNote(title,content){
    const notes = await getNotes();

    const newNote = {
        id: Date.now(),
        title,
        content
    };
    notes.push(newNote);
    await saveNotes(notes);

    console.log('note added:',newNote);
}
// read notes
async function listNotes(){
    const notes = await getNotes();
    console.log('Notes:',notes);
}
//get note by id
async function getNoteById(id){
    const notes= await getNotes();
    const note = notes.find(n => n.id === id);

    if(!note) return console.log('note not found');
    console.log('Found:',note);
}

//update note
async function updateNote(id, newContent){
    const notes = await getNotes();

    const updated = notes.map(n =>{
        if(n.id === id){
            return {
                ...n,content:newContent
            };
            
        }
        return n;
    });
    await saveNotes(updated);
    console.log('note updated');
}
// Delete Note
async function deleteNote(id){
    const notes = await getNotes();
    const filterd = notes.filter(n => n.id !== id);

    await saveNotes(filterd);
    console.log('note deleted');
}
// running code
async function run(){
    await init();

    await addNote('First Note','This is my first note');
    await  addNote('Second Note','Learning Node.js');

    await listNotes();

    const notes = await getNotes();
    const id = notes[0].id;

    await getNoteById(id);
    await updateNote(id,'Updated content');

    await deleteNote(id);

    await listNotes();
}

run();