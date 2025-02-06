import express from 'express';
import path from 'path';
import dirname from '../settings.js'

const main = express.Router()
const join = path.join.bind(this)

main.get('/', (req, res) => {
    res.sendFile(join(dirname, 'base', 'index.html'))
})


main.get('/project/typing-trainer', (req, res) => {
    //res.sendFile(join(dirname, 'project', 'typing-trainer', 'static', 'index.html'))
    res.send('unfinished')
})

export default main;
