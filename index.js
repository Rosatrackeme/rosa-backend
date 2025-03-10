const express = require('express');
const app = express();
app.use(express.json());

app.get('/rosa/id/:id', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/send', (req, res) => {
    const { id, lat, lon } = req.body;
    console.log(`Ubicación - ID: ${id}, Lat: ${lat}, Lon: ${lon}`);
    res.status(200).send('Ubicación recibida');
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
