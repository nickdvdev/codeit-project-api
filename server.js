const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config()

const PORT = process.env.PORT ?? 3000;

// DATABASE
const db = knex({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
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



db.select().from('countries')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
/*
1. / -signin page - POST --success/fail
2. /profile/:id - GET => user
3. /register - POST --user

*/

// INIT
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});