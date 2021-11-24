require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const { PORT } = process.env;

const app = express();

/* ************
 * middleware *
 **************/
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app
    .get('/', (req, res) => {
        axios
            .get(`${process.env.API_URL}cake`)
            .then(({ data: { hits } }) => res.send(hits))
            .catch((err) => console.error(err))
    })

app
    .post('/recipes', (req, res) => {
        axios
            .get(`${process.env.API_URL}${req.body.search}`)
            .then(({ data: { hits } }) => res.send(hits))
            .catch((err) => console.error(err))
    })

app.listen(PORT, console.log(`Server running on port ${PORT}`));