require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/Note');
const app = express();

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI);

app.get('/api/notes', async (req,res)=> res.json(await Note.find()));
app.post('/api/notes', async (req,res)=> res.json(await Note.create(req.body)));

app.listen(process.env.PORT, ()=> console.log(`Server on ${process.env.PORT}`));
