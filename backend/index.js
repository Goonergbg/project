const express = require('express')
const sqlite = require('sqlite')

const app = express()

let database

sqlite.open('databas.sqlite').then(database_ => {
    database = database_
})

app.get('/', (request, response) => {
    database.all('SELECT * FROM cities').then(cities => {
        response.send(cities)
    })
})

app.listen(3000)