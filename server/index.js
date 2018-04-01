require('dotenv').config();
const { json } = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const massive = require('massive');
app.use(express.static('public'));

app.use(cors());
app.use(json());

const ctrl = require('./controllers/controller');

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err));

app.get('/api/todoDaily', ctrl.getDaily);
app.get('/api/todoWeekly', ctrl.getWeekly);
app.get('/api/todoMonthly', ctrl.getMonthly);
app.post('/api/createDaily', ctrl.createDaily);
app.post('/api/createWeekly', ctrl.createWeekly);
app.post('/api/createMonthly', ctrl.createMonthly);

const port = process.env.port || 3001;
app.listen(port, () => `Listening on port ${port}`);