const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const PORT = process.env.PORT ?? 3000;

// DATABASE
const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'nick',
        password: 'linuxrunsMYSQL2021!',
        database: 'codeit_project'
    }
});

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());


// ROUTES
app.get('/', (req, res) => {
    res.send('You have reached root page');
});



db.select().from('countries').then((data) => console.log(data));
/*
1. / -signin page - POST --success/fail
2. /profile/:id - GET => user
3. /register - POST --user

*/

// INIT
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});