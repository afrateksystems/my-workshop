const express = require('express');
const app = express();
const notesRoutes = require('./routes/notesRoutes');
//console.log('errrrrror##',notesRoutes);
app.use(express.json());
app.use('/notes',notesRoutes);


app.listen(3001,()=>{
    console.log('server started');
})

module.exports = app;