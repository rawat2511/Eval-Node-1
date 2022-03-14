const express = require('express');
const address = require('./address.json');
const cors = require('cors');
const PORT = 8000;

const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log("Listening to PORT : ", PORT);
});

app.get('/api/addresses', (req, res) => {
    res.json(address);
});

app.post('/api/addresses', express.json(), (req, res) => {
    address.push(req.body);
    res.json(req.body);
})

app.put('/api/addresses/:id', express.json(), (req, res) => {

    var id1 = req.params.id;
    var index = address.findIndex((adr) => Number(adr.id) === Number(id1));
    address.splice(index, 1, {id: id1, address: req.body.address});
    res.json(address);
})

app.delete('/api/addresses/:id', express.json(), (req, res) => {

    var id1 = req.params.id;
    var index = address.findIndex((adr) => Number(adr.id) === Number(id1));
    address.splice(index, 1);
    res.json(address);
})

