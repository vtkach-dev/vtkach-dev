import express from 'express';
import path from 'path';

const dirname = import.meta.dirname;

const main = express.Router()
const join = path.join.bind(this)

main.get('/', (req, res) => {
    res.sendFile(join(dirname, 'base', 'index.html'))
})


main.get('/quake1', (req, res) => {
    res.sendFile(join(dirname, 'games', 'quake.htm'))
})
main.use('/', express.static(join(dirname, 'games')));



export default main;
