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
    if(title.trim()==""){
        console.log("the title is empty")
    }
    else if (content.trim()=="") {
        console.log("the content is empty")
    } else {
        
    
    notes.push(newNote);
    await saveNotes(notes);

    console.log('note added:',newNote);
    }
}
// read notes
async function listNotes(){
    const notes = await getNotes();
    console.log('Notes:',notes);
}
//get note by id
async function getNoteById(id){
    const notes= await getNotes();
    const note = notes.find(n => n.id == id);

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
    const [,, command, ...args] = process.argv;
    switch(command){
        case 'add':
            await addNote(args[0],args[1]);
            break;
        case 'list':
            await listNotes();
            break;
        case 'get':
            await getNoteById(args[0]);
            break;
        case 'update':
            await updateNote(args[0],args[1]);
            break;
        case 'delete':
            await updateNote(args[0],args[1]);
            break;
        default:
            console.log(`\nUsage:
                node app.js add "Title" "content"
                node app.js list
                node app.js get<id>
                node app.js update <id> "New Content"
                node app.js delete <id>\n`);        
    }

}

run();