import express from 'express';
import main from './mainRouter.js';

const app = express()

app.use(express.static('static'))
app.use('/', main)

app.listen(80, () => {
    console.log('server running on vtkach-dev.ru');
})
