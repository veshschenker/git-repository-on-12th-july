const express = require('express');
const app = express();
//const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('listening at port 3000');
});

const flowerArray = [
    { id: 1, name: "common sunflower", species: "h.annuus", family: "asteraceae", color: "yellow", image: "common-sunflower.jpg" },
    { id: 2, name: "common daisy", species: "B.perennis", family: "asteraceae", color: "white", image: "common-daisy.jpg" },
    { id: 3, name: "carnation", species: "D.caryophyllus", family: "Caryophyllaceae", color: "purple", image: "carnation.jpg" },
    { id: 4, name: "common poppy", species: "P.rhoeas", family: "Papaverceae", color: "red", image: "common-poppy.jpg" },
    { id: 5, name: "yallow", species: "A.millefolium", family: "Asteraceae", color: "white", image: "yallow" },
    { id: 6, name: "primrose", species: "P.vulgaris", family: "Primulaceae", color: "yellow", image: "primrose.png" }
];

app.get('/api/flowers', (req, res) => {
    res.status(200).send(flowerArray);
});

app.get('/api/flowers/:id', (req, res) => {
    var id = req.params.id;
    var info = flowerArray.find((f) => {
        return f.id == id;
    })
    if (info) {
        res.status(200).send(info);
    }
    res.sendStatus(404);
});

app.post('/api/flowers', (req, res) => {
    var flower = req.body;
    var maxId = Math.max.apply(Math.flowerArray.map(f => f.id));
    flower.id = maxId + 1;
    flowerArray.push(flower);
    res.sendStatus(200);
});