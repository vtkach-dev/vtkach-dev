import express from 'express';
import main from './routers/main.js';
import game from './routers/game.js';
import project from './routers/project.js';

const app = express()

app.use(express.static('static'))
app.use('/', main)
app.use('/game', game)
app.use('/project', project)

app.listen(80, () => {
    console.log('server running on vtkach-dev.ru');
})
