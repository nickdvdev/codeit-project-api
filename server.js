const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const PORT = process.env.PORT ?? 3000;

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'nick',
        password: '',
        database: 'codeit-project'
    }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});