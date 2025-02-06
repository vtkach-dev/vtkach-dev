import express from 'express';
import path from 'path';
import dirname from '../settings.js'

const game = express.Router()
const join = path.join.bind(this)

game.get('/quake1', (req, res) => {
    res.sendFile(join(dirname, 'game', 'quake1', 'quake.htm'))
})

game.use('/WebQuake', express.static(join(dirname, 'game', 'quake1', 'WebQuake')));
game.use('/id1', express.static(join(dirname, 'game', 'quake1', 'id1')));
//wrgfrwegf
export default game
