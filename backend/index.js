const express = require('express')
const sqlite = require('sqlite')

const app = express()
app.use(express.json())

let database

sqlite.open('databas.sqlite').then(database_ => {
    database = database_
})

app.get('/', (request, response) => {
    database.all('SELECT * FROM teams_table').then(teams => {
        database.all('SELECT * FROM pl_livescore').then(livescore => {
            const result = {
                teams,
                livescore
            }
            response.send(result)
        })
    })
})


app.listen(3000)