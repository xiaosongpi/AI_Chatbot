const express = require('express');
const app = express()

const db = require('./src/config/db');

const port = process.env.DB_PORT;

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
});