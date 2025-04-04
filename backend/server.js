const express = require('express');
const app = express()

const db = require('./src/config/db');
const geminiRoutes = require('./src/modules/routes/geminiRoute');

const port = process.env.DB_PORT;
app.use(express.json());
app.use('/api', geminiRoutes);

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`)
});