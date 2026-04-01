const { request, response } = require("express");
const service = require('../services/noteServices')

exports.getAllNotes = async (request,response) =>{
    const notes = await service.getNotes();
    response.json(notes);
}
exports.getNoteById = async (request,response) =>{
    const notes = await service.getNotes();
    const note = notes.find(n => n.id ==request.params.id);
    if(!note) return response.status(404).json({error:'Not Found'});
    response.json(note);
};
exports.createNote = async(request,response) =>{
    const{title,content} = request.body;
    const status = "created";
    const createdAt = Date();
    if(!title || !content){
        return response.status(400).json({error:'title & content required'});
    }
    const notes = await service.getNotes();
    
    const newNote = {
        id: Date.now(),
        title,
        content,
        status,
        createdAt
    };
    notes.push(newNote);
    await service.saveNotes(notes);

    response.status(201).json(newNote);
};
exports.updateNote = async(request,response) =>{
    const notes = await service.getNotes();

    const noteid = isNaN(request.params.id)
        ? request.params.id
        : Number(request.params.id);
    const noteExists = notes.find(n => n.id === noteid);
    if (!noteExists) {
        return response.status(404).json({ error: 'Not Found' });
    }
    if("createdAt" in request.body){
        return response.status(400).json({ error: 'date cannot be changed' });
    }
    const newstatus = request.body.status;
    if (newstatus !== undefined){
    if(newstatus.toLowerCase() !== "closed"){
        return response.status(400).json({ error: 'closed status cannot be changed' });
    }}
    const updated = notes.map(n=>
        n.id == request.params.id?{...n,...request.body}:n
    );
    await service.saveNotes(updated);
    response.json({message:'Updated'});
};

exports.deleteNote = async (request, response) => {
    const notes = await service.getNotes();
    const noteid = isNaN(request.params.id)
        ? request.params.id
        : Number(request.params.id);
    const noteExists = notes.find(n => n.id === noteid);
    if (!noteExists) {
        return response.status(404).json({ error: 'Not Found' });
    }
    const filtered = notes.filter(n => n.id !== noteid);
    
    await service.saveNotes(filtered);
    response.status(200).json({ message: 'deleted' });
};
