import express from 'express';
import path from 'path';
import dirname from '../settings.js'

const project = express.Router()
const join = path.join.bind(this)

project.get('/typing-trainer', (req, res) => {
    //res.sendFile(join(dirname, 'project', 'typing-trainer', 'static', 'index.html'))
    res.send('unfinished')
})

export default project;
