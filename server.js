import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3006
const animals = ['Koer', 'Inimene', 'Jõehobu', 'Lammas']

const app = express()

// endpoints

app.get('/', (request, response) => {
    response.status(200).json({
        message: "Reede on. Mine koju!"
    })
})

app.get('/joehobu', (request, response) => {
    response.status(200).json(animals[2])
})

app.get('/animals', (request, response) => {
    response.status(200).json(animals)
})


app.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${ PORT }`)
})