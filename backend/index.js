const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')
const moment = require('moment')

const app = express()
app.use(express.json())
app.use(cors())

let database

sqlite.open('databas.sqlite').then(database_ => {
    database = database_

    app.get('/', (request, response) => {
        database.all('SELECT * FROM teams_table').then(teams => {
            database.all('SELECT * FROM pl_livescore').then(livescore => {
                database.all('SELECT * FROM player_table').then(players => {
                    database.all('SELECT * FROM forum_table order by id DESC').then(forum => {
                        const result = {
                            teams,
                            livescore,
                            players,
                            forum
                        }
                        response.send(result)
                    })
                })
            })
        })


        app.post('/', (request, response) => {
            const date = moment().format('YYYY-MM-DD')
            database.run('INSERT INTO forum_table (name, comment, date) VALUES (?, ?, ?)', [request.body.name, request.body.comment, date])
                .then(() => {
                    response.send()
                })
        })
    })
})

app.listen(3000)


//skriver name och comment så att jag inte behöver lägga in fler ? vilket annars hade behövts pga att varje inlägg får ett ID. 