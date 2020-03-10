const express = require('express')
const sqlite = require('sqlite')

const app = express()
app.use(express.json())

let database

sqlite.open('databas.sqlite').then(database_ => {
    database = database_
})

app.get('/', (request, response) => {
    database.all('SELECT * FROM Table').then(test => {
        response.send(test)
    })
})

app.listen(3000)