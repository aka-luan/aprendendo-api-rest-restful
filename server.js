const express = require('express')
const app = express();
const clients = require('./clients.json')

app.use(express.json()); 

app.get('/clients', (req, res) => {
    res.json(clients)
})
app.get('/clients/:id', (req, res) => {
    const { id } = req.params   
    const client = clients.find(cli => cli.id == id)

    if (!client) return res.status(204).json()

    res.json(client)
})
app.post('/clients', (req, res) => {
    const { name, email } = req.body

    // logica p salvar

    res.json ({ name, email })
})
app.put('/clients/:id', (req, res) => {
    const { id } = req.params   
    const client = clients.find(cli => cli.id == id)

    if (!client) return res.status(204).json()

    const { name } = req.body

    client.name = name

    res.json(client)
})
app.delete('/clients/:id', (req, res) => {
    const { id } = req.params
    const clientsFiltered = clients.filter(client => client.id != id)

    res.json(clientsFiltered)
})


app.listen(9999, () => {
    console.log('server is running!')
})