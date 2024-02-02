const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mateusgill1326:CU1m9ZInm1uOPUFF@palworld.v6zqigc.mongodb.net/?retryWrites=true&w=majority');


const app = express()
app.use(express.json())
const port = 3000


const Pals = mongoose.model('Pals',{ 
    id: Number,
    name: String   
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    const Pal = new Pals({
        id: req.body.id,
        name: req.body.name
    })

    await Pal.save()
    res.send(Pal)
})

app.listen(port, () => {
    console.log(`GO GO GO!!!!!`)
})

