const {describe , it} = require("mocha");
const app = require('../server');
const { expect } = require("chai");
const request = require("supertest");
describe('get /notes',()=>{
    it('test to return all notes with get',async ()=>{
        console.log(request);
        const res = await request(app).get('/notes');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });
    it('test to get not found error through invalid id',async ()=>{
        console.log(request);
        const res = await request(app).get('/notes/123');
        expect(res.status).to.equal(404);
    });
    it('test create new note',async ()=>{
        console.log(request);
        const res = await request(app).post('/notes/').send({ title: 'task1', content: 'this is a note' });
        expect(res.status).to.equal(201);
    });
    it('test create new note which is empty',async ()=>{
        console.log(request);
        const res = await request(app).post('/notes/').send({});
        expect(res.status).to.equal(400);
    });
    it('test delete non-existing note',async ()=>{
        console.log(request);
        const res = await request(app).delete('/notes/333333333');
        expect(res.status).to.equal(404);
    });
    it('test delete existing note',async ()=>{
        const saveResponse = await request(app).post('/notes/').send({ title: 'task1', content: 'this is a note' });
        const res = await request(app).delete('/notes/'+saveResponse.body.id);
        expect(res.status).to.equal(200);
        
    });
    it('test to post new note',async ()=>{
        console.log(request);
        const res = await request(app).post('/notes/',{ title: 'task1', content: 'this is a note' });
        expect(res.status).to.equal(500);
    });
    it('test to post new note which is empty',async ()=>{
        console.log(request);
        const res = await request(app).post('/notes/').send({});
        expect(res.status).to.equal(400);
    });
    it("Test for posting note with no title", async () => {
    const response = await request(app).post("/notes").send({ content: "Content" });
    expect(response.status).to.equal(400);
    });
    it("Test for posting note with no content", async () => {
    const response = await request(app).post("/notes").send({ title: "Content"});
    expect(response.status).to.equal(400);
    });
    it("Test updating content", async () => {
    const saveResponse = await request(app).post('/notes/').send({ title: 'task1', content: 'this is a note' });
    const response = await request(app).put('/notes/'+saveResponse.body.id).send({ content: "Content"});
    expect(response.status).to.equal(200);
    });
    it("Test updating title", async () => {
    const saveResponse = await request(app).post('/notes/').send({ title: 'task1', content: 'this is a note' });
    const response = await request(app).put('/notes/'+saveResponse.body.id).send({ title: "Content"});
    const checkResponse = await request(app).get('/notes/'+saveResponse.body.id);
    expect(response.status).to.equal(200);
    });
    it("Test updating status", async () => {
    const saveResponse = await request(app).post('/notes/').send({ title: 'task1', content: 'this is a note' });
    const response = await request(app).put('/notes/'+saveResponse.body.id).send({ status: "Content"});
    expect(response.status).to.equal(200);
    });
    it("Test updating with invalid id", async () => {
    const saveResponse = await request(app).post('/notes/').send({ title: 'task1', content: 'this is a note' });
    const response = await request(app).put('/notes/2222').send({ status: "Content"});
    expect(response.status).to.equal(404);
    });
})