const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
PORT = 5002;

app.use(cors());

app.get('/character/:name', async(req, res) => {
    const characterName = req.params.name;
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

    try {
        const response = await axios.get(url)
        const {name, status, species, gender, origin:{name:originName}, image} = response.data.results[0];
        res.json({name, status, species, gender, origin:{name:originName}, image})
    } catch (ERROR) {
        res.status(404).json({error: 'personaje no encontrado'})
    }
})


app.listen(PORT, () => {
    console.log(`express está escuchando en el puerto http://localhost:${PORT}`)
});